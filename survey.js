const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const profile = {
  name: "",
  activity: "",
  music: "",
  favoriteMeal: "",
  favoriteFood: "",
  favoriteSport: "",
  superpower: "",
};

rl.question(
  "What's your name? Nicknames are also acceptable :)\n",
  (answer) => {
    profile.name = answer;
    rl.question("What's an activity you like doing?\n", (answer) => {
      profile.activity = answer;
      rl.question("What do you listen to while doing that?\n", (answer) => {
        profile.music = answer;
        rl.question(
          "Which meal is your favorite (eg: dinner, brunch, etc.)\n",
          (answer) => {
            profile.favoriteMeal = answer;
            rl.question(
              "What's your favourite thing to eat for that meal?\n",
              (answer) => {
                profile.favoriteFood = answer;
                rl.question(
                  "Which sport is your absolute favourite?\n",
                  (answer) => {
                    profile.favoriteSport = answer;
                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at!\n",
                      (answer) => {
                        profile.superpower = answer;
                        console.log(
                          `${profile.name} loves listening to ${profile.music} while ${profile.activity}, devouring ${profile.favoriteFood} for ${profile.favoriteMeal}, prefers ${profile.favoriteSport} over any other sport, and is amazing at ${profile.superpower}.`
                        );
                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
