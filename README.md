# typescript decorator 範例

# decorator用途

方法裝飾器可以讓 method 有額外的功能，
而不影響原本 method 要達成的事情，
像是範例中的 doubleNumber ，這個 method 想達到的事情就是將數字乘以 2，
因為想知道 method 被使用的狀況，所以使用了方法裝飾器來做紀錄，
除了用來寫 log 做紀錄，也可以用來做 method 前的權限檢查等等之類的延伸功能。

# tsconfig.json 設定

```code
{ 
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```

# ref
[typescript decorator 範例](https://dotblogs.com.tw/grounder/2017/09/23/213733)