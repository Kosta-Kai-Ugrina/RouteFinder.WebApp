import axios from "axios";

async function fetch<T, U>(method: "get" | "post", url: string, data?: T) {
  try {
    const response = await (method == "get"
      ? axios.get(url)
      : axios.post(url, data));
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

export async function get<T, U>(url: string): Promise<U> {
  return fetch("get", url);
}

export async function post<T, U>(url: string, data: T): Promise<U> {
  return fetch("post", url, data);
}
