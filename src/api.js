import axios from "axios";

const API_BASE = "https://dioc.tech/admin/api";
const API_TOKEN = "2b9adcaa53ada101a450e750c3c453fb15efd3e85fff631a0835000ee6312859de71c8dd3700704957ec3caa69f6498d5d71d9e38c663c7b0e5e2c753c5de2ea6baa12833dd2299120f07b8ba3252d0630ca1863b1859638831250f258960477df7e5902243f30647560689fbfb5023c034df7d960cc96f6dedd76807d2fc816";

const api = axios.create({
    baseURL: API_BASE,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
    },
});

export default api;