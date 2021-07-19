# ✅ Custom Checkbox



checkbox에 css가 일부분만 적용돼서 방법을 찾다가

checkbox를 숨기고 label을 checkbox처럼 만들어서 사용하는 방법을 공부했다.

```html
<div class="check">
  <input type="checkbox" id="check">
  <label for="check"><span>Custom Checkbox</span></label>
</div>
```

checkbox를 숨길때

```css
#check{
    display: none;
}
```

`display: none;` 으로 하면 checkbox가 focus되지 못하므로

웹접근성에 위배된다.



1. 가상요소선택자 `before`을 이용해서 label의 내부 앞 부분에 checkbox 이미지를 넣어준다.

2. 가상클래스선택자 `checked`를 이용해서 체크가 되었을 때는 checked 이미지를 넣어준다.

3. `margin`을 조정해서 원래 checkbox를 가려주면된다.

```css
.check{
  display: flex;
  align-items: center;
  padding: 10px;
}

label{
  display: flex;
  align-items: center;
}

span{
  margin-left:10px;
}

input[type="checkbox"] + label::before{
    content: url('https://user-images.githubusercontent.com/37561621/126177631-0dc22179-caf6-4f87-b549-4642bfe953fc.png');
    width: 24px;
    height: 24px;
    margin-left: -26px;
}

input[type="checkbox"]:checked + label::before{
    content: url('https://user-images.githubusercontent.com/37561621/126177624-7ab699ef-e962-4126-bfa9-95d4bc05ea0e.png');
    width: 24px;
    height: 24px;
}
```

이렇게하면 웹접근성을 지키면서 체크박스를 원하는 스타일로 꾸밀 수 있다.



결과

![checkbox](https://user-images.githubusercontent.com/37561621/126178167-8358f92c-0b70-47cd-b479-965501482aae.png)
![checked](https://user-images.githubusercontent.com/37561621/126178230-85b41863-3da3-496a-a715-3dfff1a4aefc.png)
