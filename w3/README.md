# Week-3 & Week-4

## Introduction to Angular.
* What is the Goal of Angular?
* Angular CLI
* JavaScript & Typescript

## Laboratory Work - 4: https://docs.google.com/document/d/1IeCaB__SkXU_Eg0ZgM0QYoI9ClgrRI7BrjDl9TJoB5A/edit?usp=sharing


##  What I did:

### 0. Understand Typescript
```bash
1. 官网: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
2.1 安装Typescript: "npm install -g typescript"
2.2 运行 Typescript 代码: "tsc helloworld.ts" 会生成 helloworld.js
3. 在 w4 目录下的 TypeScript 文件夹里简单比对了 JS 和 TS 的区别 
```

### 1. Intro to Angular 
```bash
0. 官网: https://angular.io/guide/setup-local
1. 安装 Node.js: https://github.com/nodejs/release#release-schedule  检查版本: "node -v"
2. 要有 npm包管理器: https://docs.npmjs.com/about-npm  检查版本: "npm -v"
3. 安装 Angular CLI: "npm install -g @angular/cli"
4. Angular CLI helps you create, develop, build, and test your Angular projects.
```

### 2. Create a new project
```bash
1. "ng new demo" 会生成一个新的 Angular 项目
2. "cd demo" 进入项目, "ng serve"("ng serve --open") 启动项目
3. 在 http://localhost:4200/ 可以看到项目的主页面
```

### 3. Project Structure
```bash
1. node_modules: npm packages(ignore it when you push to github)) 
2. src: source code
3. angular.json: configuration file
4. package.json: npm packages
5. tsconfig.json: TypeScript configuration
6. tslint.json: TypeScript linting configuration
7. README.md: project description
```

### 4. Working principal of Angular
```bash
1. 在 src 目录下的 index.html 是 Angular 的入口文件, 里面有 <app-root></app-root> 标签, 会被 src/app/app.component.ts 里的 AppComponent 组件替换
2.1 在 src/app/app.component.ts 里的 AppComponent 组件里, 有一个 templateUrl: './app.component.html', 是项目的主页面
2.2 如果将HTML代码写在 ts 文件里, 要使用 template: `` 语法, 来代替 templateUrl
2.3 CSS 代码也是同理, 要使用 styles: [``] 语法 来代替 styleUrls: ['./app.component.css'] 语法
3.1 app.modules.ts 里的 declarations:[AppComponent], 是项目的主组件, 这个列表包含了项目中所有的组件
3.2 项目的组件必须在 app.modules.ts 里的@NgModule声明, 才能在其他组件里使用
4.1 在 src/app/app.component.html 里, 有一个 <router-outlet></router-outlet> 标签, 会被 src/app/app-routing.module.ts 里的 AppRoutingModule 组件替换(是一个路由)
4.2 我们将 app.component.html 里的内容清空, 只保留 <router-outlet></router-outlet> 标签
5.1 我们在ts文件里(app.component.ts)写逻辑, 在html文件里写页面
6.1 在 Angular Html 页面里, 可以使用 {{ }} 语法, 用来显示ts文件里的变量
6.2 在 ts 文件里声明的每个变量, 都要在 constructor 里初始化
7.1 可以使用 *ngFor 语法, 来遍历 ts 文件里的数组
7.2 可以使用 *ngIf 语法, 来判断 ts 文件里的变量
```

### 5. Examples of Angular: using variables, arrays, if and for
```bash
1. 在 src/app/app.component.ts 里创建了一些变量, 数组, boolean值, 并在 src/app/app.component.html 里, 使用 {{ }} 语法, 来展示这些变量
```

### 6. Create Models and Local Database
```bash
1. 在 src/app 目录下, 创建一个 models.ts 文件, 用来存放 Student 类的接口
2. 在 app.component.ts 里, 创建一个 students 数组, 用来存放 Student 类的对象. 在本地写入了 3 个 Student 对象. 并在 html 里, 使用 *ngFor 语法, 遍历展示
```

### 7. Create a Todo List
```bash
1.1 在 html 页面创建一个 input 标签, 用来输入新的 Task 的名字. 通过[(ngModel)] 语法, 将 input 标签的值, 传递给 ts 文件里的变量 inputData
1.2 需要通过 import { FormsModule } from '@angular/forms'; 并在 @NgModule里, imports 里添加FormsModule, 才能使用 [(ngModel)] 语法
2. 在 html 页面创建一个 button 标签, 用来添加新的 Task. 通过(click) 语法, 将 button 标签的点击事件, 传递给 ts 文件里的 addTask() 函数
3. 实现 deleteTask() 函数, 用来删除 Task
```


