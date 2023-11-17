/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module API-Fetching
 *@developer Aditya P
 */

import axios from "axios"
import { useEffect, useState } from "react"

/**
 * @desc Generic Local function to handle all server api calls
 * @param {String} url - Accept the generic API url
 * @param {Object} options - API headers and options
 */

export const useFetch = (url, options) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const loadAPIData = async () => {
        setLoading(true)
        try {
            const res = await axios(url, options)
            setData(res.data)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
    useEffect(() => {
        loadAPIData()
    },[])

    return {data, loading, error}
}

