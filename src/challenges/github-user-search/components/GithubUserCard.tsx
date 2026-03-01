import { Users, MapPin, Book, ExternalLink, Loader2, AlertCircle } from "lucide-react"
import useGithub from "../hooks/useGithub"

export function GithubUserCard({ username }: { username: string }) {
  const { userData, loading, error } = useGithub(username)

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-slate-200 shadow-sm animate-pulse">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-4" />
        <p className="text-slate-500 font-medium">Fetching developer profile...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-rose-100 shadow-sm transition-all duration-300">
        <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="w-6 h-6 text-rose-500" />
        </div>
        <h3 className="text-slate-900 font-semibold mb-1">User not found</h3>
        <p className="text-slate-500 text-center text-sm">{error}</p>
      </div>
    )
  }

  if (!userData) return null

  return (
    <div className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a 
          href={userData.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-indigo-600 transition-colors"
        >
          <ExternalLink size={20} />
        </a>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
        <img 
          src={userData.avatar_url} 
          alt={userData.login} 
          className="w-24 h-24 rounded-2xl border-2 border-slate-100 shadow-sm object-cover"
        />
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-2xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-indigo-600 transition-colors">
            {userData.name || userData.login}
          </h3>
          <p className="text-indigo-600 font-medium text-sm mb-3">@{userData.login}</p>
          {userData.bio && (
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 max-w-md">
              {userData.bio}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-slate-400 mb-1">
            <Book size={16} />
          </span>
          <span className="text-lg font-bold text-slate-900">{userData.public_repos}</span>
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Repos</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-slate-400 mb-1">
            <Users size={16} />
          </span>
          <span className="text-lg font-bold text-slate-900">{userData.followers}</span>
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Followers</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-slate-400 mb-1">
            <Users size={16} />
          </span>
          <span className="text-lg font-bold text-slate-900">{userData.following}</span>
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Following</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        {userData.location && (
          <div className="flex items-center gap-1.5 text-slate-500">
            <MapPin size={14} className="text-slate-400" />
            <span>{userData.location}</span>
          </div>
        )}
        <a 
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-indigo-600 font-medium hover:underline opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300"
        >
          View GitHub Profile <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}

export default GithubUserCard