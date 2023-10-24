# Week-5

## Angular Components

* Properties
* Data Binding
* Templates
* Styles
* Life-cycle hooks

## Laboratory Work - 5: https://docs.google.com/document/d/1_LLt1e-qwFVClGK7c_X2yPWZ2eXdcH0KSMPATcHT6Dk/edit?usp=sharing

### Useful links

1. https://angular.io/guide/architecture-components
2. https://angular.io/guide/component-overview
3. https://angular.io/api/core/Component
4. https://angular.io/guide/inputs-outputs
5. https://angular.io/guide/lifecycle-hooks

##  What I did: 
### 1. Create Project and components
```bash
1. 使用 "ng new demo" 创建了新项目
2. 当Angular遇到没用见过的 tag, 比如: <app-root></app-root> 时, 会在 app.module.ts 里的 declarations:[] 里寻找, 所以在里面需要导入目前项目里的所有组件
3. 使用 "ng generate component task-list/ ng g c task-item" 创建了新组件后需要更新app.module.ts(WebStorm会自动更新)
```

### 2. Work with task-list component
```bash
1. 在 app.component.html 里使用 <app-task-list></app-task-list> 来使用 task-list 组件
2. 创建新的 models.ts 文件, 用来存放数据模型
3. 在 task-list.component.ts 里导入 Task 模型, 并创建一个 newTasks 数组, 里面存放 Task 对象
4. 在 task-list.component.html 里使用 *ngFor 循环遍历 newTasks 数组, 并使用 task-item 组件来显示每个 Task 对象
5. 通过 data binding 实现 task-list.component.html 里的 <input> 与 currentTask 变量的双向绑定
6. 当用户输入Task title后, 点击 Add Task 按钮, 会调用 addTask() 方法.
7. 添加新的Task时, 我们使用 static id 来给每个 Task 对象分配一个唯一的 id
8. 实现 addTask() 方法, 用来把 currentTask 变量的值添加到 newTasks 数组里. 并在 task-list.component.html 里使用(click) 事件来调用 addTask() 方法
```
### 3. Work with task-item component
```bash 
1. 在 task-item.component.ts 里导入 Task 模型, 并使用 @Input() 装饰器来接收从 task-list 组件传递过来的 Task 对象
2.1 添加 isDone 属性到 Task 模型里, 并在 task-list.component.html 里使用[(ngModel)] 来根据 isDone 属性的值来动态改变 checkbox 的样式
2.2 根据 isDone 属性的值来动态改变 Task 的样式(添加或删除 task-done 类)、
3. '[]' - inputs; Sending data from parent to child.  '()' - outputs; Sending event from child to parent.
4.1 实现 removeTask() 方法, 用来删除 newTasks 数组里的 Task 对象. 并在 task-item.component.html 里使用(click) 事件来调用 removeTask() 方法
4.2 为此我们需要通知Parent component(task-list) 来删除. 为此我们在 ts 文件里使用 @Output() 装饰器来创建一个 @Output() remove = new EventEmitter(); 对象, 并在 removeTask() 方法里调用 emit(this.task.id) 方法来通知 Parent component
4.3 在 task-list.component.html 里使用 (remove)="removeTask($event)" 事件来调用 removeTask() 方法, 并删除指定的 Task 对象
5.1 创建了doneTasks 数组, 用来存放已经完成的 Task 对象
5.2 在 task-list.component.html 里, 在存在 doneTask 数组的情况下, 使用 *ngFor 循环遍历 doneTasks 数组, 并使用 task-item 组件来显示每个 Task 对象
5.3 需要在点击 done 时, 把 Task 对象从 newTasks 数组里删除, 并添加到 doneTasks 数组里
5.4 在 task-item.component.html 里, 在点击 done 时, 我们需要通知Parent component(task-list) 来做指定操作. 为此我们在 ts 文件里使用 @Output() 装饰器来创建一个 @Output() done = new EventEmitter() 对象, 并在 isDoneChanged() 方法里调用 emit(this.task) 方法来通知 Parent component
5.5 在 task-list.component.html 里使用 (done)="onIsDoneChanged($event)" 事件来调用 onIsDoneChanged() 方法, 检查 Task 对象的 isDone 属性, 并做相应的操作
```


