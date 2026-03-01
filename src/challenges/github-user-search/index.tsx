import { useState } from "react"
import GithubUserCard from "./components/GithubUserCard"
import { Search, X } from "lucide-react"
import { siGithub } from "simple-icons"
import { BrandIcon } from "../../components/BrandIcon"

export function GithubUserSearch() {
  const [inputValue, setInputValue] = useState("")
  const [username, setUsername] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setUsername(inputValue.trim())
    }
  }

  const handleClear = () => {
    setInputValue("")
    setUsername("")
  }

  return (
    <div className="max-w-xl mx-auto space-y-8 py-4">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 mb-2">
          <BrandIcon icon={siGithub} size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">GitHub User Finder</h2>
        <p className="text-slate-500 text-sm">Search for any developer by their GitHub username.</p>
      </div>

      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g. octocat, ijas9118..."
          className="block w-full pl-11 pr-12 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm"
        />
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </form>

      <div className="pt-4">
        {username ? (
          <GithubUserCard username={username} />
        ) : (
          <div className="flex flex-col items-center justify-center p-12 bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-3xl">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
              <Search className="w-8 h-8 text-slate-300" />
            </div>
            <p className="text-slate-500 text-sm font-medium">No user selected</p>
            <p className="text-slate-400 text-xs mt-1">Enter a username above to see their profile details</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default GithubUserSearch