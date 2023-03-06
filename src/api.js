import axios from "axios";

const server = axios.create();

server.defaults.baseURL = "http://watch.jimmy0006.site:3002";

export const result = (q0, q1, q2, q3, q4, q5, q6, q7) =>
  server.post("/result", {
    q0: q0,
    q1: q1,
    q2: q2,
    q3: q3,
    q4: q4,
    q5: q5,
    q6: q6,
    q7: q7,
  });
