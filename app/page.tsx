'use client'
import { useState } from 'react'

export default function Home() {
  const [page, setPage] = useState('home')
  const [name, setName] = useState('')
  const [region, setRegion] = useState('')
  const [selectedJobs, setSelectedJobs] = useState<string[]>([])
  const [customJob, setCustomJob] = useState('')
  const [regionSearch, setRegionSearch] = useState('')

  const jobs = [
    { id: 'mowing', label: 'Lawn mowing', age: '14+', emoji: '🌿' },
    { id: 'dogs', label: 'Dog walking', age: '14+', emoji: '🐕' },
    { id: 'plants', label: 'Plant watering', age: '11+', emoji: '🌱' },
    { id: 'cars', label: 'Car washing', age: '11+', emoji: '🚗' },
    { id: 'tech', label: 'Tech help', age: '16+', emoji: '💻' },
    { id: 'tutoring', label: 'Tutoring', age: '16+', emoji: '📚' },
    { id: 'garden', label: 'Gardening', age: '14+', emoji: '🌻' },
    { id: 'groceries', label: 'Grocery help', age: '11+', emoji: '🛍️' },
    { id: 'other', label: 'Other', age: 'Any', emoji: '✏️' },
  ]

  const regions = [
    'Bondi','Surry Hills','Newtown','Glebe','Parramatta','Chatswood','Manly','Cronulla',
    'Penrith','Liverpool','Blacktown','Wollongong','Newcastle','Central Coast',
    'Melbourne CBD','Fitzroy','Richmond','St Kilda','Brunswick','Geelong','Ballarat',
    'Brisbane CBD','Gold Coast','Sunshine Coast','Cairns','Townsville','Toowoomba',
    'Adelaide CBD','Glenelg','Port Adelaide','Mount Gambier',
    'Perth CBD','Fremantle','Subiaco','Mandurah','Bunbury',
    'Hobart','Launceston','Devonport',
    'Darwin','Alice Springs',
    'Canberra','Belconnen','Tuggeranong',
  ]

  const filtered = regions.filter(r => r.toLowerCase().includes(regionSearch.toLowerCase()))
  const toggleJob = (id: string) => {
    setSelectedJobs(prev => prev.includes(id) ? prev.filter(j => j !== id) : [...prev, id])
  }

  const allFeedJobs = [
    { emoji: '🌿', title: 'Lawn mowing', loc: 'Bondi 1.2km', time: '2 hrs', pay: '$35', id: 'mowing' },
    { emoji: '🐕', title: 'Dog walking', loc: 'Surry Hills 0.8km', time: '45 min', pay: '$20', id: 'dogs' },
    { emoji: '🌱', title: 'Plant watering', loc: 'Glebe 1.7km', time: '20 min', pay: '$10', id: 'plants' },
    { emoji: '💻', title: 'iPhone setup help', loc: 'Newtown 3km', time: '1 hr', pay: '$25', id: 'tech' },
    { emoji: '📚', title: 'Maths tutoring', loc: 'Leichhardt 2km', time: '1 hr', pay: '$30', id: 'tutoring' },
    { emoji: '🌻', title: 'Garden weeding', loc: 'Marrickville 2.4km', time: '2 hrs', pay: '$30', id: 'garden' },
    { emoji: '🛍️', title: 'Grocery help', loc: 'Rozelle 0.3km', time: '30 min', pay: '$15', id: 'groceries' },
    { emoji: '🚗', title: 'Car washing', loc: 'Newtown 0.5km', time: '1.5 hrs', pay: '$25', id: 'cars' },
  ]

  const feedJobs = allFeedJobs.filter(j => selectedJobs.includes(j.id))

  if (page === 'home') return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
      <div className="text-6xl mb-6">🌿</div>
      <h1 className="text-4xl font-bold text-green-600 mb-3">NeighbourJobs</h1>
      <p className="text-gray-500 text-lg mb-2">Earn money safely in your neighbourhood.</p>
      <div className="flex gap-2 mb-8 flex-wrap justify-center">
        <span className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">Parent-safe</span>
        <span className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">Local only</span>
        <span className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">Paid in-app</span>
      </div>
      <button onClick={() => setPage('signin')} className="w-full max-w-xs bg-green-600 text-white py-3 rounded-xl text-lg font-medium mb-3">Sign in</button>
      <button onClick={() => setPage('signin')} className="w-full max-w-xs border border-gray-200 text-gray-700 py-3 rounded-xl text-lg font-medium">Create account</button>
      <p className="text-gray-400 text-sm mt-6">For teens aged 11-17 in Australia</p>
    </main>
  )

  if (page === 'signin') return (
    <main className="min-h-screen bg-white flex flex-col p-8 max-w-sm mx-auto">
      <button onClick={() => setPage('home')} className="text-gray-400 text-sm mb-6 text-left">Back</button>
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome back</h2>
      <p className="text-gray-400 text-sm mb-6">Sign in to your NeighbourJobs account.</p>
      <button onClick={() => setPage('jobs')} className="flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl mb-4 font-medium text-gray-700">
        <svg width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908C16.658 14.016 17.64 11.708 17.64 9.2z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/><path d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.96L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/></svg>
        Continue with Google
      </button>
      <div className="flex items-center gap-3 my-2"><div className="flex-1 h-px bg-gray-100"/><span className="text-gray-300 text-sm">or</span><div className="flex-1 h-px bg-gray-100"/></div>
      <input type="email" placeholder="Email" className="border border-gray-200 rounded-xl px-4 py-3 mb-3 text-sm outline-none focus:border-green-400"/>
      <input type="password" placeholder="Password" className="border border-gray-200 rounded-xl px-4 py-3 mb-4 text-sm outline-none focus:border-green-400"/>
      <button onClick={() => setPage('jobs')} className="bg-green-600 text-white py-3 rounded-xl font-medium">Sign in</button>
    </main>
  )

  if (page === 'jobs') return (
    <main className="min-h-screen bg-white flex flex-col p-6 max-w-sm mx-auto">
      <div className="flex gap-1 mb-5">{[1,2,3].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i===1?'bg-green-500':'bg-gray-100'}`}/>)}</div>
      <h2 className="text-xl font-bold text-gray-800 mb-1">What jobs interest you?</h2>
      <p className="text-gray-400 text-sm mb-4">Pick all that appeal. You can change this later.</p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {jobs.map(j => (
          <button key={j.id} onClick={() => toggleJob(j.id)} className={`border rounded-xl p-3 text-center transition-all ${selectedJobs.includes(j.id) ? 'border-green-500 bg-green-50' : 'border-gray-100'} ${j.id === 'other' ? 'col-span-2' : ''}`}>
            <div className="text-2xl mb-1">{j.emoji}</div>
            <div className="text-xs font-medium text-gray-700">{j.label}</div>
            <div className="text-xs text-gray-400">{j.age}</div>
          </button>
        ))}
      </div>
      {selectedJobs.includes('other') && (
        <textarea value={customJob} onChange={e => setCustomJob(e.target.value)} placeholder="Describe your job..." className="border border-green-200 bg-green-50 rounded-xl p-3 text-sm mb-3 resize-none outline-none" rows={2}/>
      )}
      <p className="text-center text-gray-400 text-sm mb-3">{selectedJobs.length === 0 ? 'Tap to select jobs' : `${selectedJobs.length} job${selectedJobs.length>1?'s':''} selected`}</p>
      <button onClick={() => setPage('name')} disabled={selectedJobs.length === 0} className={`py-3 rounded-xl font-medium transition-all ${selectedJobs.length > 0 ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-300'}`}>Next</button>
    </main>
  )

  if (page === 'name') return (
    <main className="min-h-screen bg-white flex flex-col p-6 max-w-sm mx-auto">
      <div className="flex gap-1 mb-5">{[1,2,3].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i<=2?'bg-green-500':'bg-gray-100'}`}/>)}</div>
      <div className="text-center text-5xl mb-4">👤</div>
      <h2 className="text-xl font-bold text-gray-800 mb-1 text-center">What should we call you?</h2>
      <p className="text-gray-400 text-sm mb-6 text-center">Only your first name is shown publicly.</p>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Your first name" className="border border-gray-200 rounded-xl px-4 py-4 text-center text-xl font-medium outline-none focus:border-green-400 mb-2"/>
      <p className="text-gray-400 text-xs text-center mb-6">Shown to residents and your parent</p>
      <button onClick={() => setPage('region')} disabled={!name.trim()} className={`py-3 rounded-xl font-medium ${name.trim() ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-300'}`}>Next</button>
    </main>
  )

  if (page === 'region') return (
    <main className="min-h-screen bg-white flex flex-col p-6 max-w-sm mx-auto">
      <div className="flex gap-1 mb-5">{[1,2,3].map(i => <div key={i} className="h-1 flex-1 rounded-full bg-green-500"/>)}</div>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Where do you live?</h2>
      <p className="text-gray-400 text-sm mb-4">Only your suburb is ever shown publicly.</p>
      <input value={regionSearch} onChange={e => setRegionSearch(e.target.value)} placeholder="Search all Australian regions..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-400 mb-3"/>
      <div className="flex-1 overflow-y-auto max-h-72 mb-4">
        {filtered.map(r => (
          <button key={r} onClick={() => setRegion(r)} className={`w-full text-left px-4 py-3 rounded-xl mb-1 text-sm font-medium transition-all ${region===r ? 'bg-green-50 border border-green-200 text-green-700' : 'text-gray-700 hover:bg-gray-50'}`}>
            {r}
          </button>
        ))}
      </div>
      <button onClick={() => setPage('feed')} disabled={!region} className={`py-3 rounded-xl font-medium ${region ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-300'}`}>Lets go</button>
    </main>
  )

  return (
    <main className="min-h-screen bg-white flex flex-col p-6 max-w-sm mx-auto">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-gray-400 text-xs">Good morning,</p>
          <h2 className="text-xl font-bold text-gray-800">Hey {name}!</h2>
        </div>
      </div>
      <span className="inline-flex items-center gap-1 text-xs font-medium bg-green-50 text-green-700 px-3 py-1 rounded-full mb-4">📍 {region}</span>
      <div className="flex-1">
        {feedJobs.length > 0 ? feedJobs.map((j, i) => (
          <div key={i} className="border border-gray-100 rounded-xl p-3 flex gap-3 mb-3">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-xl flex-shrink-0">{j.emoji}</div>
            <div className="flex-1">
              <p className="font-medium text-gray-800 text-sm">{j.title}</p>
              <p className="text-xs text-gray-400">{j.loc} · {j.time}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-800">{j.pay}</p>
            </div>
          </div>
        )) : (
          <div className="text-center py-12 text-gray-400">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-sm">No jobs found. Try selecting more job types!</p>
          </div>
        )}
      </div>
    </main>
  )
}
