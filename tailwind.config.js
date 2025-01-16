import typography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            }
        },
        extend: {
            animation: {
                "fade-in": "fade-in 1s ease-in",
                "slide-in": "slide-in 1s ease-out",
                "bounce-slow": "bounce 3s infinite"
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" }
                },
                "slide-in": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" }
                }
            },
            backgroundImage: {
                "gradient-custom":
                    "linear-gradient(to bottom right, var(--gradient-start), var(--gradient-middle), var(--gradient-end))",
                "text-gradient-light":
                    "linear-gradient(to right, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)",
                "text-gradient-dark":
                    "linear-gradient(to right, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)"
            },
            gradientColorStops: {
                heading: {
                    light: {
                        from: "#1e293b", // slate-800
                        via: "#2563eb", // sky-500
                        to: "#6ee7b7" // emerald-300
                    },
                    dark: {
                        from: "#d9f99d", // lime-200
                        via: "#eab308", // yellow-500
                        to: "#a855f7" // purple-500
                    }
                }
            },
            colors: {
                gradient: {
                    start: {
                        DEFAULT: "#ffffff",
                        dark: "#001407"
                    },
                    middle: {
                        DEFAULT: "#fcedbd",
                        dark: "#111111"
                    },
                    end: {
                        DEFAULT: "#e5f7ff",
                        dark: "#000a08"
                    }
                },
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)"
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    foreground: "var(--secondary-foreground)"
                },
                destructive: {
                    DEFAULT: "var(--destructive)",
                    foreground: "var(--destructive-foreground)"
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)"
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    foreground: "var(--accent-foreground)"
                },
                popover: {
                    DEFAULT: "var(--popover)",
                    foreground: "var(--popover-foreground)"
                },
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)"
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            }
        }
    },
    plugins: [
        typography,
        require("tailwindcss-motion"),
        function ({ addComponents, theme }) {
            addComponents({
                ".gradient-heading": {
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundImage:
                        "linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to))",
                    "--tw-gradient-from": theme(
                        "gradientColorStops.heading.light.from"
                    ),
                    "--tw-gradient-via": theme(
                        "gradientColorStops.heading.light.via"
                    ),
                    "--tw-gradient-to": theme(
                        "gradientColorStops.heading.light.to"
                    )
                },
                ".dark .gradient-heading": {
                    "--tw-gradient-from": theme(
                        "gradientColorStops.heading.dark.from"
                    ),
                    "--tw-gradient-via": theme(
                        "gradientColorStops.heading.dark.via"
                    ),
                    "--tw-gradient-to": theme(
                        "gradientColorStops.heading.dark.to"
                    )
                }
            });
        }
    ]
};

