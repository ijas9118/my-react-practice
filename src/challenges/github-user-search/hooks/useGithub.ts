import { useEffect, useState } from "react"
import type { GithubUser } from "../types"

const useGithub = (username: string) => {
  const [userData, setUserData] = useState<GithubUser | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUserData = async (username: string, signal: AbortSignal) => {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      signal
    })

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("User not found")
      }
      throw new Error("Failed to fetch user")
    }

    return res.json()
  }

  useEffect(() => {
    if (!username) {
      setUserData(null)
      setLoading(false)
      setError(null)
      return
    }

    const controller = new AbortController()

    setLoading(true)
    setError(null)

    // Debounce wait would be nice, but here we just fetch on prop change
    const timer = setTimeout(() => {
      fetchUserData(username, controller.signal)
        .then(data => setUserData(data))
        .catch(error => {
          if (error.name !== "AbortError") {
            setError(error.message)
          }
        })
        .finally(() => setLoading(false))
    }, 500)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [username])

  return { userData, loading, error }
}

export default useGithub