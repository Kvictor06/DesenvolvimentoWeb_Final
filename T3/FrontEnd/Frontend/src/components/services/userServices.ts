import { api } from "../axios/api";
import { User } from "../models/User";

export const add = async (user: User) => {
    await api.post("", user);
}

export const remove = async (id: string) => {
    await api.delete(`/${id}`);
}

export const edit = async (user: User) => {
    await api.put("", user);
}

export const getAll = async () => {
    const response = await api.get<User[]>("");
    return response.data;
}