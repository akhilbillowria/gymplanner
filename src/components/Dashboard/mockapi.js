// src/api/mockApi.js

export const fetchUserData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'John Doe',
          avatarUrl: '/images/avatar.jpg',
          goal: 'Lose 5kg in 2 months',
          dailySteps: 6500,
          notifications: true,
          publicProfile: false,
          upcomingClasses: [
            {
              title: 'Yoga Session',
              date: '2024-10-15',
              description: 'A relaxing yoga session for all levels.',
            },
            {
              title: 'HIIT Training',
              date: '2024-10-20',
              description: 'High-intensity interval training for fat burning.',
            },
          ],
          achievements: [
            {
              title: 'Completed 100 Workouts',
              date: '2024-09-30',
            },
            {
              title: 'Achieved 10,000 Steps',
              date: '2024-10-05',
            },
          ],
          motivationalQuote: 'The pain you feel today will be the strength you feel tomorrow.',
          quoteAuthor: 'Unknown',
        });
      }, 1000);
    });
  };
  
  export const fetchWorkoutData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          lastSevenDays: [
            { date: 'Oct 1', duration: 30 },
            { date: 'Oct 2', duration: 45 },
            { date: 'Oct 3', duration: 50 },
            { date: 'Oct 4', duration: 40 },
            { date: 'Oct 5', duration: 35 },
            { date: 'Oct 6', duration: 60 },
            { date: 'Oct 7', duration: 55 },
          ],
          suggestedWorkouts: [
            {
              name: 'HIIT Training',
              description: 'High-intensity interval training for fat burning.',
            },
            {
              name: 'Strength Training',
              description: 'Build muscle strength with targeted exercises.',
            },
            {
              name: 'Cardio Blast',
              description: 'Boost your endurance with cardio workouts.',
            },
          ],
        });
      }, 1000);
    });
  };
  
  export const fetchNutritionData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          today: {
            protein: 120, // grams
            carbs: 200,    // grams
            fats: 70,      // grams
          },
        });
      }, 1000);
    });
  };
  