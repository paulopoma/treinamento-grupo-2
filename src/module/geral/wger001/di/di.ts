import axios from "axios";
import { Wger001Controller } from "../controller/wger001Controller";
import { buscaFiliaisRepository } from "../data/repository/buscaFiliaisRepository";
import { buscaFiliaisUsecase } from "../domain/usecase/buscaFiliaisUsecase";

const AxiosInstance = axios.create({
    baseURL: "https://consultors-auth.cgi.cgisoftware.com.br",
    headers: {
        "Content-Type": "application/json"
    }
})

const buscaFiliaisRepositoryImpl = buscaFiliaisRepository(AxiosInstance)
const buscaFiliaisUsecaseImpl = buscaFiliaisUsecase(buscaFiliaisRepositoryImpl)
const wger001Controller = (context: any) => 
    new Wger001Controller(context, buscaFiliaisUsecaseImpl)

export { wger001Controller }
