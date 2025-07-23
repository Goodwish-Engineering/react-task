#How to run this project locally?
=> Go to your command prompt and follow these steps:
   1.    git clone https://github.com/anuragsayshelloworld/react-task.git
   2.    cd react-task
   3.    npm install
   4.    npm run dev

I have deployed this on vercel for easier access as well.
Link: https://react-task-plum-nine.vercel.app/   

#Assumptions:
1. I assumed that features like login, signup, and post creation were not required for this task, as they were not mentioned in the provided requirements.

2. I used Tailwind CSS for styling, assuming that the choice of styling framework was flexible.

#Limitation
1. Pagination is handled entirely on the client side. The service is called once via Context, fetching all posts at once. When you navigate pages, only filtered posts are sent from Context to the component.

As a result, newly added posts will not appear in the list unless the page is refreshed, since there's no live update or refetch on pagination change.  