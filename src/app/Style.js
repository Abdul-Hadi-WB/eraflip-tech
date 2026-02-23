// src/components/Style.jsx
"use client";

import React from "react";

export default function Style() {
  return (
    <style jsx global>{`
      /* Fix for horizontal scrollbar */
      html, body {
        overflow-x: hidden !important;
        width: 100% !important;
        max-width: 100vw !important;
      }

      /* Remove horizontal scrollbar completely */
      .no-scrollbar {
        overflow-x: hidden !important;
      }

      /* Video element fixes for CLEAR HD VIDEO */
      video {
        background: transparent !important;
        background-color: transparent !important;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }

      /* Hide all video controls */
      video::-webkit-media-controls,
      video::-webkit-media-controls-enclosure,
      video::-webkit-media-controls-panel,
      video::-webkit-media-controls-play-button,
      video::-webkit-media-controls-start-playback-button,
      video::-moz-media-controls {
        display: none !important;
      }

      /* Optimize video rendering */
      video {
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -o-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000;
        -moz-perspective: 1000;
        -ms-perspective: 1000;
        perspective: 1000;
      }

      /* Force GPU acceleration for smooth video playback */
      .video-container {
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
      }

      /* Animations */
      @keyframes slide {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes float-glow {
        0%, 100% { transform: translateY(0) scale(1); opacity: 0.1; }
        50% { transform: translateY(-20px) scale(1.1); opacity: 0.3; }
      }

      /* Add your other animations here ... */

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .animate-spin-slow {
        animation: spin 8s linear infinite;
      }

      .animate-float-glow {
        animation: float-glow 4s ease-in-out infinite;
      }

      .animate-slide {
        animation: slide 3s linear infinite;
      }
    `}</style>
  );
}