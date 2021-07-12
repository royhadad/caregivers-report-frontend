import axios from "axios";
import * as t from "io-ts";
import {PathReporter} from "io-ts/PathReporter";
import React from "react";
import assertNever from "../../../utils/assertNever";
import endpoint from "../../../utils/endpoint";
import ErrorView from "./views/ErrorView";
import LoadingView from "./views/LoadingView";
import TableView from "./views/TableView";
import {getCurrentYear} from "../../../utils/dateUtils";

const resType = t.type({
    year: t.number,
    caregivers: t.array(
        t.type({
            name: t.string,
            patients: t.array(t.string)
        })
    )
});

export type Report = t.TypeOf<typeof resType>;

type State =
    | {
          type: "Initial";
      }
    | {
          type: "Resolved";
          report: Report;
          isRefreshing: boolean;
      }
    | {
          type: "Rejected";
          error: string;
      };

function useDashboard(params: { year: number }) {
    const [state, setState] = React.useState<State>({ type: "Initial" });

    const startLoading = () => {
        setState((prevState) => {
            switch (prevState.type) {
                case "Initial":
                case "Rejected":
                    return { type: "Initial" };
                case "Resolved":
                    return { ...prevState, isRefreshing: true };
            }
        });
    };

    const fetchReport = React.useCallback(() => {
        startLoading();

        return axios
            .get<unknown>(endpoint(`reports/${params.year}`))
            .then(({data}) => {
                if (!resType.is(data)) {
                    console.error(PathReporter.report(resType.decode(data)).join(", "));
                    throw new Error("Error");
                }

                setState({type: "Resolved", report: data, isRefreshing: false});
            })
            .catch(() => {
                setState({ type: "Rejected", error: "Error" });
            });
    }, [params.year]);

    React.useEffect(() => {
        fetchReport();
    }, [fetchReport]);

    return { state, actions: { fetchReport } };
}

const Dashboard = () => {
    const {state, actions} = useDashboard({year: getCurrentYear()});

    switch (state.type) {
        case "Initial":
            return <LoadingView />;
        case "Rejected":
            return <ErrorView message={state.error} onClickRetry={actions.fetchReport} />;
        case "Resolved":
            return <TableView {...state} />;
        default:
            assertNever(state);
            return <></>;
    }
};

export default Dashboard;
