# LMS frontend

### setup instructions 

1.clone the project
```
   git clone https://github.com/SameerAhmadKhanday/lms-frontnd.git

```
2.move into the dir
```
    cd lms-frontend

```
3. install dependncies
```
npm i
```

4.run the server
```
 npm run dev
```

### setup instructions for tailwind

[tailwind official instruction doc] (https://tailwindcss.com/docs/installation)

5. add tailwind to your project
```
npm install -D tailwindcss
```
6.create tailwind config  file 
```
npx tailwindcss init
```

7.add file extensions to tailwind config  file in the content property
```
"./src/**/*.{html,js,jsx,ts,tsx}"
```
8.add the tailwindd directives  at the top of the `index.css` file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
9.adding plugins and dependencies
```
 npm  install  @reduxjs/toolkit react-redux react-router-dom react-icon react-chartjs-2 chart.js daisyui axios  react-hot-toast @tailwindcss/line-clamp
 ```