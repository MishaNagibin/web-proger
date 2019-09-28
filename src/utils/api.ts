import Axios, { AxiosRequestConfig, AxiosResponse, AxiosPromise, AxiosError } from "axios"

const isBrowser = typeof window !== "undefined"

class Api {
    private _CSRFToken?: string
    private _config: AxiosRequestConfig = { headers: {} }
    // private _url: string = "http://10.55.0.88:60088"
    private _url: string = "http://localhost:65432"

    constructor() {
        this._config.withCredentials = true
        if (!isBrowser) {
            this._config.headers.origin = "back-end"
        }
        this.CSRFToken = undefined
    }

    public set CSRFToken(v: string | undefined) {
        this._CSRFToken = v
        if (v) {
            this._config.headers["X-Token"] = this._CSRFToken;
        } else {
            delete this._config.headers["X-Token"];
        }
    }

    public get<T>(url: string, fields?: (keyof T)[]): Promise<T> {
        const p = new Promise<T>((resolve, reject) => {
            this.request(Axios.get(this.preparePath<T>(url, fields), this._config), resolve, reject)
        })
        // p.catch(this.catchHandler)

        return p
    }

    public post<T, R>(url: string, data?: R, fields?: (keyof T)[]): Promise<T> {
        const p = new Promise<T>((resolve, reject) => {
            this.request(Axios.post(this.preparePath<T>(url, fields), data, this._config), resolve, reject)
        })
        // p.catch(this.catchHandler)

        return p
    }

    public put<T, R>(url: string, data?: R, fields?: (keyof T)[]): Promise<T> {
        const p = new Promise<T>((resolve, reject) => {
            this.request(Axios.put(this.preparePath<T>(url, fields), data, this._config), resolve, reject)
        })
        // p.catch(this.catchHandler)

        return p
    }

    public patch<T, R>(url: string, data?: R, fields?: (keyof T)[]): Promise<T> {
        const p = new Promise<T>((resolve, reject) => {
            this.request(Axios.patch(this.preparePath<T>(url, fields), data, this._config), resolve, reject)
        })
        // p.catch(this.catchHandler)

        return p
    }

    public delete<T>(url: string, fields?: (keyof T)[]): Promise<T> {
        const p = new Promise<T>((resolve, reject) => {
            this.request(Axios.delete(this.preparePath<T>(url, fields), this._config), resolve, reject)
        })
        // p.catch(this.catchHandler)

        return p
    }

    private request<T>(p: AxiosPromise<T>, resolve: (value?: T) => void, reject: (reason?: AxiosResponse) => void) {
        p.then(resp => {
            resp.status === 200 ? resolve(resp.data) : reject(resp)
        }, e => {
            console.log(((e || {}).response || {}).data || e)
        })
    }

    private preparePath<T>(url: string, fields?: (keyof T)[]): string {
        if (fields === undefined || fields.length < 1) {
            return this._url + "/" + url
        }

        const parts = url.split("/")
        parts[parts.length - 1] = fields.join(",") + "@" + parts[parts.length - 1]

        return this._url + "/" + parts.join("/")
    }
}

export default new Api()
