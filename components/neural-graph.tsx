"use client"

import { useEffect, useRef } from "react"

export function NeuralGraph() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const nodes = svg.querySelectorAll(".input-node, .output-node")

    nodes.forEach((node) => {
      node.addEventListener("mouseenter", () => {
        node.setAttribute("transform", "scale(1.1)")
      })
      node.addEventListener("mouseleave", () => {
        node.setAttribute("transform", "scale(1)")
      })
    })

    return () => {
      nodes.forEach((node) => {
        node.removeEventListener("mouseenter", () => {})
        node.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return (
    <div className="graph-visualization">
      <svg viewBox="0 0 1000 800" className="neural-graph">
        <defs>
          <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="0.5" />
            <circle cx="12.5" cy="12.5" r="0.5" fill="rgba(6, 182, 212, 0.3)" />
          </pattern>

          <pattern id="techGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="none" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="0.5" />
            <circle cx="25" cy="25" r="1" fill="rgba(16, 185, 129, 0.2)" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" />
            </circle>
          </pattern>

          <linearGradient id="nodeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#0066ff", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
          </linearGradient>

          <linearGradient id="nodeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#10b981", stopOpacity: 1 }} />
          </linearGradient>

          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#0066ff", stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: "#6366f1", stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: "#06b6d4", stopOpacity: 0.8 }} />
          </linearGradient>

          <linearGradient id="enhancedFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#0066ff", stopOpacity: 0.9 }} />
            <stop offset="25%" style={{ stopColor: "#6366f1", stopOpacity: 0.7 }} />
            <stop offset="50%" style={{ stopColor: "#06b6d4", stopOpacity: 0.9 }} />
            <stop offset="75%" style={{ stopColor: "#10b981", stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: "#0066ff", stopOpacity: 0.9 }} />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.08" />

        <g className="connections">
          <path
            d="M 200 220 Q 400 160 600 220"
            stroke="url(#enhancedFlow)"
            strokeWidth="8"
            fill="none"
            className="data-flow flow-1"
          >
            <animate attributeName="stroke-dasharray" values="0,200;50,200;0,200" dur="3s" repeatCount="indefinite" />
            <animate attributeName="stroke-dashoffset" values="0;-50;-100" dur="3s" repeatCount="indefinite" />
          </path>

          <path
            d="M 270 400 Q 500 340 680 350"
            stroke="url(#enhancedFlow)"
            strokeWidth="7"
            fill="none"
            className="data-flow flow-2"
          >
            <animate attributeName="stroke-dasharray" values="0,180;45,180;0,180" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="stroke-dashoffset" values="0;-45;-90" dur="2.5s" repeatCount="indefinite" />
          </path>

          <path
            d="M 370 560 Q 550 520 720 520"
            stroke="url(#enhancedFlow)"
            strokeWidth="6"
            fill="none"
            className="data-flow flow-3"
          >
            <animate attributeName="stroke-dasharray" values="0,160;40,160;0,160" dur="2s" repeatCount="indefinite" />
            <animate attributeName="stroke-dashoffset" values="0;-40;-80" dur="2s" repeatCount="indefinite" />
          </path>

          <line
            x1="150"
            y1="190"
            x2="200"
            y2="320"
            stroke="rgba(99, 102, 241, 0.5)"
            strokeWidth="2"
            className="network-link"
          />
          <line
            x1="380"
            y1="190"
            x2="440"
            y2="280"
            stroke="rgba(99, 102, 241, 0.5)"
            strokeWidth="2"
            className="network-link"
          />
          <line
            x1="440"
            y1="280"
            x2="500"
            y2="380"
            stroke="rgba(99, 102, 241, 0.5)"
            strokeWidth="2"
            className="network-link"
          />
          <line
            x1="200"
            y1="320"
            x2="270"
            y2="400"
            stroke="rgba(99, 102, 241, 0.5)"
            strokeWidth="2"
            className="network-link"
          />
          <line
            x1="380"
            y1="190"
            x2="270"
            y2="400"
            stroke="rgba(99, 102, 241, 0.3)"
            strokeWidth="1.5"
            className="network-link"
          />
          <line
            x1="600"
            y1="220"
            x2="680"
            y2="350"
            stroke="rgba(6, 182, 212, 0.4)"
            strokeWidth="2"
            className="network-link"
          />
          <line
            x1="680"
            y1="350"
            x2="720"
            y2="520"
            stroke="rgba(16, 185, 129, 0.4)"
            strokeWidth="2"
            className="network-link"
          />
        </g>

        <g className="central-hub">
          <circle cx="500" cy="400" r="100" fill="url(#nodeGradient1)" filter="url(#glow)" className="hub-core">
            <animate attributeName="r" values="100;120;100" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="400" r="80" fill="rgba(255,255,255,0.25)" className="hub-inner" />
          <text
            x="500"
            y="395"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#1e40af"
            fontSize="36"
            fontWeight="bold"
          >
            AI
          </text>
          <text
            x="500"
            y="420"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#374151"
            fontSize="16"
            fontWeight="600"
          >
            METAGRAPH
          </text>

          <g className="processing-rings">
            <circle
              cx="500"
              cy="400"
              r="140"
              fill="none"
              stroke="rgba(99, 102, 241, 0.6)"
              strokeWidth="4"
              strokeDasharray="20,20"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 500 400;360 500 400"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx="500"
              cy="400"
              r="170"
              fill="none"
              stroke="rgba(6, 182, 212, 0.6)"
              strokeWidth="4"
              strokeDasharray="15,25"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="360 500 400;0 500 400"
                dur="12s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx="500"
              cy="400"
              r="200"
              fill="none"
              stroke="rgba(16, 185, 129, 0.5)"
              strokeWidth="3"
              strokeDasharray="10,30"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 500 400;360 500 400"
                dur="15s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>

        <g className="input-nodes">
          <circle cx="150" cy="220" r="50" fill="url(#nodeGradient1)" filter="url(#glow)" className="input-node cyber">
            <animate attributeName="r" values="50;60;50" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="220" r="38" fill="rgba(255,255,255,0.2)" />
          <text x="150" y="220" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="28">
            🛡️
          </text>
          <text x="150" y="260" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="600">
            Cyber
          </text>

          <circle
            cx="230"
            cy="400"
            r="45"
            fill="url(#nodeGradient2)"
            filter="url(#glow)"
            className="input-node finance"
          >
            <animate attributeName="r" values="45;55;45" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="230" cy="400" r="34" fill="rgba(255,255,255,0.2)" />
          <text x="230" y="400" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="26">
            💹
          </text>
          <text x="230" y="445" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="600">
            Finance
          </text>

          <circle
            cx="330"
            cy="560"
            r="42"
            fill="url(#nodeGradient1)"
            filter="url(#glow)"
            className="input-node research"
          >
            <animate attributeName="r" values="42;52;42" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="330" cy="560" r="32" fill="rgba(255,255,255,0.2)" />
          <text x="330" y="560" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="24">
            🔬
          </text>
          <text x="330" y="605" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="600">
            Research
          </text>
        </g>

        <g className="output-nodes">
          <circle
            cx="600"
            cy="220"
            r="48"
            fill="url(#nodeGradient2)"
            filter="url(#glow)"
            className="output-node intelligence"
          >
            <animate attributeName="r" values="48;58;48" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="220" r="36" fill="rgba(255,255,255,0.2)" />
          <text x="600" y="220" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="26">
            🧠
          </text>
          <text x="600" y="260" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="600">
            Intelligence
          </text>

          <circle
            cx="680"
            cy="350"
            r="44"
            fill="url(#nodeGradient1)"
            filter="url(#glow)"
            className="output-node analytics"
          >
            <animate attributeName="r" values="44;54;44" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="680" cy="350" r="33" fill="rgba(255,255,255,0.2)" />
          <text x="680" y="350" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="24">
            📊
          </text>
          <text x="680" y="395" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="600">
            Analytics
          </text>

          <circle
            cx="720"
            cy="520"
            r="46"
            fill="url(#nodeGradient2)"
            filter="url(#glow)"
            className="output-node insights"
          >
            <animate attributeName="r" values="46;56;46" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="720" cy="520" r="35" fill="rgba(255,255,255,0.2)" />
          <text x="720" y="520" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="26">
            💡
          </text>
          <text x="720" y="565" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="600">
            Insights
          </text>
        </g>

        <g className="data-particles">
          <circle cx="150" cy="220" r="3" fill="#0066ff" opacity="0.8">
            <animateMotion dur="4s" repeatCount="indefinite" path="M0,0 Q180,80 300,40 T450,60" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="220" cy="350" r="2.5" fill="#6366f1" opacity="0.6">
            <animateMotion dur="3s" repeatCount="indefinite" path="M0,0 Q150,-80 280,-120 T480,-100" />
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="280" cy="420" r="3.5" fill="#06b6d4" opacity="0.7">
            <animateMotion dur="5s" repeatCount="indefinite" path="M0,0 Q120,-60 220,-30 T420,-60" />
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="300" r="2" fill="#10b981" opacity="0.6">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M0,0 Q100,50 180,80 T320,60" />
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </g>

        <g className="metrics-display">
          <text x="550" y="60" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="500">
            Real-time Processing
          </text>
          <text x="550" y="80" textAnchor="middle" fill="#0066ff" fontSize="14" fontWeight="bold">
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            50K+ events/min
          </text>
        </g>
      </svg>
    </div>
  )
}
