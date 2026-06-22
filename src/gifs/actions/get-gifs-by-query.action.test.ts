import { beforeEach, describe, expect, test } from "vitest";
import { giphyApi } from "../api/giphy.api";
import { getGifsByQuery } from "./get-gifs-by-query.action";
import AxioMockAdapter from "axios-mock-adapter";
import { giphySearchResponseMock } from "../../../tests/mocks/giphy.response.data";

describe("getGifsByQuery", () => {
  let mock = new AxioMockAdapter(giphyApi);

  beforeEach(() => {
    mock = new AxioMockAdapter(giphyApi);
  });

  //   test("Should return a list of gifs", async () => {
  //     const gifs = await getGifsByQuery("2B");
  //     const [gif1] = gifs;

  //     expect(gif1).toStrictEqual({
  //       id: expect.any(String),
  //       title: expect.any(String),
  //       url: expect.any(String),
  //       width: expect.any(Number),
  //       height: expect.any(Number),
  //     });
  //   });

  test("Should return a list of gifs", async () => {
    mock.onGet("/search").reply(200, giphySearchResponseMock);
    const gifs = await getGifsByQuery("2B");

    expect(gifs.length).toBe(10);

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe("string");
      expect(typeof gif.title).toBe("string");
      expect(typeof gif.url).toBe("string");
      expect(typeof gif.height).toBe("number");
      expect(typeof gif.width).toBe("number");
    });
  });

  test("Should return an empty list of gifs", async () => {
    mock.restore();
    const gifs = await getGifsByQuery("");
    console.log(gifs);
    expect(gifs.length).toBe(0);
  });

  test("Should handle error when the API return an error", () => {
    mock.onGet("/search").reply(400, {
      data: {
        message: "Bad request",
      },
    });
  });
});
