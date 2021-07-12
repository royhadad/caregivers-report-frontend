import config from "../config";

const endpoint = (path: string) => {
    return `${config.API_HOST_URL}/${path}`;
};

export default endpoint;
