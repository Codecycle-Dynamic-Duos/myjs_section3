((globalThis) => {

    const core = Deno.core;

    function argsToMessage(...args) {
        return args.map((arg) => JSON.stringify(arg)).join(" ");
    }

    const sarcasticPhrases = [
        "That's a good one!", "Congratulations, you broke the code!", "You have hacked the NASA website",
        "Check your inbox! Interpol just mailed you!", "You must be a real expert ...",
        "Wow, never heard that before...", "How come one can be so genius!",
        "Great job, you found a bug!", "Why did you become a Programmer? Just, why?",
        "Now you can go and sleep!", "Bro, thinks he is Hikaru!", "Ulla vandha power adi!\nAnna yaaru Thalapathy",
        "You are not the hero Gotham deserved, but the hero Gotham needed!"
    ];

    const COLORS = {
        reset: "\x1b[0m",
        bright: "\x1b[1m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
    };

    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    }

    globalThis.console = {
        log: (...args) => {
            const time = getCurrentTime();
            core.print(`${COLORS.green}[${time}] [log]: ${argsToMessage(...args)}\n${COLORS.reset}`, false);
        },
        sarcasm: (...args) => {
            const time = getCurrentTime();
            const sarcasticMessage = sarcasticPhrases[Math.floor(Math.random() * sarcasticPhrases.length)];
            const logmessage = `${COLORS.magenta}[${time}] [sarcasm]: ${argsToMessage(...args)}\n${COLORS.reset}${COLORS.bright}${sarcasticMessage}${COLORS.reset}`;
            core.print(`${logmessage}\n`, true);
        },
        error: (...args) => {
            const time = getCurrentTime();
            core.print(`${COLORS.red}[${time}] [error]: ${argsToMessage(...args)}\n${COLORS.reset}`, true);
        },
        warn: (...args) => {
            const time = getCurrentTime();
            core.print(`${COLORS.yellow}[${time}] [warn]: ${argsToMessage(...args)}\n${COLORS.reset}`, true);
        },
        debug: (...args) => {
            const time = getCurrentTime();
            core.print(`${COLORS.cyan}[${time}] [debug]: ${argsToMessage(...args)}${COLORS.reset}\n`, true);
        }
    };

})(globalThis);
