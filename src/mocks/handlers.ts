import { http, HttpResponse } from "msw";
import { fakedata } from "./fake";

// URL params?
const dataSize = "small";

export const handlers = [
  http.get("/data", () => {
    if (dataSize === "small") {
      const data = fakedata.slice(0, 1000);
      return HttpResponse.json(data);
    } else if (dataSize === "medium") {
      const data = fakedata.slice(0, 5000);
      return HttpResponse.json(data);
    } else {
      return HttpResponse.json(fakedata);
    }
  }),
  http.all("*", () => {
    console.error("No paths were hit");
  }),
];
