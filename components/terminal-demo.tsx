"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TerminalDemo() {
  const [activeTab, setActiveTab] = useState("prompt")
  const [promptInput, setPromptInput] = useState("")
  const [autoInput, setAutoInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")
  const [showConfirm, setShowConfirm] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [selectedSuggestion, setSelectedSuggestion] = useState(0)

  const commandPool = [
    "git status",
    "git commit -m 'Update readme'",
    "git push origin main",
    "npm install",
    "npm run dev",
    "docker ps",
    "docker-compose up -d",
    "ls -la",
    "cd projects",
    "mkdir new-project",
  ]

  useEffect(() => {
    if (autoInput) {
      const filtered = commandPool.filter((cmd) => cmd.toLowerCase().startsWith(autoInput.toLowerCase()))
      setSuggestions(filtered)
      setSelectedSuggestion(0)
    } else {
      setSuggestions([])
    }
  }, [autoInput])

  const handlePromptSubmit = () => {
    if (!promptInput.trim()) return

    setLoading(true)
    setResult("")
    setShowConfirm(false)

    // Simulate AI processing
    setTimeout(() => {
      setLoading(false)

      if (promptInput.toLowerCase().includes("list") && promptInput.toLowerCase().includes("file")) {
        setResult("ls -la")
        setShowConfirm(true)
      } else if (promptInput.toLowerCase().includes("create") && promptInput.toLowerCase().includes("directory")) {
        setResult("mkdir new-directory")
        setShowConfirm(true)
      } else if (promptInput.toLowerCase().includes("git") && promptInput.toLowerCase().includes("status")) {
        setResult("git status")
        setShowConfirm(true)
      } else {
        setResult("Command not found. Please try a different query.")
      }
    }, 1500)
  }

  const handleConfirm = () => {
    setShowConfirm(false)
    setResult((prev) => `${prev}\n\nExecuting command...\n\n${getCommandOutput(result)}`)
  }

  const handleAutoComplete = () => {
    if (suggestions.length > 0) {
      setAutoInput(suggestions[selectedSuggestion])
    }
  }

  const handleAutoSubmit = () => {
    if (!autoInput.trim()) return
    setResult(`Executing: ${autoInput}\n\n${getCommandOutput(autoInput)}`)
  }

  const getCommandOutput = (cmd: string) => {
    if (cmd === "ls -la") {
      return "total 32\ndrwxr-xr-x  5 user  staff   160 Mar 19 12:34 .\ndrwxr-xr-x  3 user  staff    96 Mar 19 12:30 ..\n-rw-r--r--  1 user  staff  1420 Mar 19 12:32 README.md\ndrwxr-xr-x 12 user  staff   384 Mar 19 12:33 node_modules\n-rw-r--r--  1 user  staff   514 Mar 19 12:31 package.json"
    } else if (cmd === "mkdir new-directory") {
      return "Directory created successfully."
    } else if (cmd === "git status") {
      return 'On branch main\nYour branch is up to date with \'origin/main\'.\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n\tmodified:   README.md\n\nno changes added to commit (use "git add" and/or "git commit -a")'
    } else {
      return "Command executed successfully."
    }
  }

  return (
    <div className="mx-auto max-w-4xl rounded-lg border bg-black p-4 text-white shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-gray-400">GenScript-AI🤖</div>
        <div></div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-800 text-white">
          <TabsTrigger value="prompt" className={``}>Prompt Mode</TabsTrigger>
          <TabsTrigger value="auto" className="">Auto-Suggestion Mode</TabsTrigger>
        </TabsList>


        <TabsContent value="prompt" className="mt-4">
          <div className="font-mono">
            <div className="mb-4 text-green-400">user@GenScript🤖:~$</div>

            <div className="flex items-center">
              <span className="text-green-400 mr-2">AI&gt;</span>
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handlePromptSubmit()
                }}
                placeholder="Describe what you want to do..."
                className="flex-1 bg-transparent border-none outline-none text-white"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={handlePromptSubmit}
                className="ml-2 bg-gray-800 hover:bg-gray-700 text-white border-gray-700"
              >
                Submit
              </Button>
            </div>

            {loading && (
              <div className="mt-4 flex items-center">
                <div className="animate-spin h-4 w-4 border-2 border-green-500 rounded-full border-t-transparent mr-2"></div>
                <span className="text-gray-400">Processing your request...</span>
              </div>
            )}

            {result && (
              <div className="mt-4 p-2 bg-gray-900 rounded">
                {showConfirm ? (
                  <>
                    <div className="text-yellow-400 mb-2">Here is the command:</div>
                    <div className="mb-2">{result}</div>
                    <div className="flex space-x-2 mt-2">
                      <Button size="sm" onClick={handleConfirm} className="bg-green-600 hover:bg-green-700 text-white">
                        Run
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setShowConfirm(false)
                          setPromptInput("")
                          setResult("")
                        }}
                        className="bg-gray-800 hover:bg-gray-700 text-white border-gray-700"
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="whitespace-pre-line">{result}</div>
                )}
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="auto" className="mt-4">
          <div className="font-mono">
            <div className="mb-4 text-green-400">user@GenScript🤖:~$</div>

            <div className="flex items-center relative">
              <span className="text-green-400 mr-2">$</span>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={autoInput}
                  onChange={(e) => setAutoInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Tab") {
                      e.preventDefault()
                      handleAutoComplete()
                    } else if (e.key === "Enter") {
                      handleAutoSubmit()
                    } else if (e.key === "ArrowDown" && suggestions.length > 0) {
                      setSelectedSuggestion((prev) => (prev + 1) % suggestions.length)
                    } else if (e.key === "ArrowUp" && suggestions.length > 0) {
                      setSelectedSuggestion((prev) => (prev - 1 + suggestions.length) % suggestions.length)
                    }
                  }}
                  placeholder="Type a command..."
                  className="w-full bg-transparent border-none outline-none text-white"
                />
                {autoInput && suggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-1 bg-gray-800 rounded shadow-lg z-10">
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 cursor-pointer ${index === selectedSuggestion ? "bg-gray-700" : ""}`}
                        onClick={() => {
                          setAutoInput(suggestion)
                          setSuggestions([])
                        }}
                      >
                        {suggestion}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAutoSubmit}
                className="ml-2 bg-gray-800 hover:bg-gray-700 text-white border-gray-700"
              >
                Execute
              </Button>
            </div>

            {result && <div className="mt-4 p-2 bg-gray-900 rounded whitespace-pre-line">{result}</div>}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-4 text-xs text-gray-500">
        Press Tab to autocomplete • Type exit to quit • Toggle modes with Alt+M
      </div>
    </div>
  )
}

