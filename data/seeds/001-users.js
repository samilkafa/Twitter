/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('likes').truncate()
  await knex('comments').truncate()
  await knex('tweets').truncate()
  await knex('users').truncate()


  await knex('users').insert([
    {
      username: "samilkafa",
      first_name: "Şamil",
      last_name: "Kafa",
      email: "samilkafa@gmail.com",
      password: "3141",

    },
    {
      username: "zeynepozbay",
      first_name: "Zeynep",
      last_name: "Özbay",
      email: "zeynepozbay@gmail.com",
      password: "3141",

    },
    {
      username: "serrakoc",
      first_name: "Serra",
      last_name: "Koç",
      email: "serrakoc@gmail.com",
      password: "3141",

    }
  ]);

  await knex('tweets').insert([
    {
      content: "There's a difference between running and jogging, some people seem not to have realized that yet.",
      user_id: 2
    },
    {
      content: "Russian roulette is not the same without a gun.",
      user_id: 1
    },
    {
      content: "So how is the presidential elections taking place on a violent atmosphere and they are doing nothing about it??",
      user_id: 2
    },
    {
      content: "Takin ma dog outside for a walk and this is what I see, shame...",
      user_id: 3
    }
  ]);

  await knex('comments').insert([
    {
      text: "Yeah, tell me about it. I saw someone sprinting like a dog on the sidewalk this morning.",
      user_id: 2,
      tweet_id: 1
    },
    {
      text: "For mother Russia.",
      user_id: 1,
      tweet_id: 2
    },
    {
      text: "Can you ask that to the president?",
      user_id: 2,
      tweet_id: 3
    },
    {
      text: "Absolutely terrible view!",
      user_id: 3,
      tweet_id: 4
    }
  ]);

  await knex('likes').insert([
    {
      tweet_id: 3,
      user_id: 1
    },
    {
      tweet_id: 2,
      user_id: 1
    },
    {
      tweet_id: 1,
      user_id: 2
    },
    {
      tweet_id: 1,
      user_id: 3
    }
  ]);




};