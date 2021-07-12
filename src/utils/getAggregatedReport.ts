import {Report} from "../components/pages/Dashboard/Dashboard";

// O(n) time complexity
// returns a report where every caregiver has one entry with all of it's patients
function getAggregatedReport(report: Report): Report {
    const caregiversMap = report.caregivers.reduce((caregiversMap, caregiver) => {
        const currentCaregiverPatients = caregiversMap.get(caregiver.name);
        if (!currentCaregiverPatients) {
            caregiversMap.set(caregiver.name, caregiver.patients)
        } else {
            caregiversMap.set(caregiver.name, [...currentCaregiverPatients, ...caregiver.patients]);
        }
        return caregiversMap;
    }, new Map<string, string[]>());

    const caregivers = Array.from(caregiversMap.entries()).map<Report["caregivers"][number]>(([name, patients]) => ({
        name: name,
        patients: patients
    }));

    return {year: report.year, caregivers: caregivers};
}

export default getAggregatedReport;