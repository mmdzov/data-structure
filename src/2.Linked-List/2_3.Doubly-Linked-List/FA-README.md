# لیست پیوندی دوگانه

لیست پیوندی دوگانه یک ساختار داده خطی و نوعی لیست پیوندی است که شامل اشاره گر اضافی به نام previous هستند

تفاوت لیست پیوندی دوگانه با لیست پیوندی منفرد این است که در لیست پیوندی دوگانه، هر گره شامل دو اشاره گر next و previous می باشد اما در لیست پیوندی منفرد تنها اشاره گر next وجود دارد

تا اینجا می توان فهمید که در لیست پیوندی دوگانه می توان به گره های قبلی اشاره کرد درصورتی که در لیست پیوندی منفرد این امکان وجود ندارد.

# مزایا

- امکان پیمایش دوطرفه
- کاهش پیچیدگی زمانی هر عملیات
- سربار کم در مقایسه با ساختارهای داده مانند آرایه ها
- حذف آسان گره ها در مقایسه با لیست پیوندی منفرد
- در پیاده سازی ساختارهای داده مانند Hash Tables, Stacks, Binary Trees و غیره کاربرد دارد
- می توانند برای ساخت حافظه پنهان MRU/LRU استفاده شوند

# معایب

- به علت وجود نشانگر previous به حافظه اضافی در مقایسه با لیست پیوندی منفرد نیاز دارد درنتیجه این منجر به عملیات کندتر و پیاده سازی و نگهداری پیچیده تر می شود
- پیمایش در لیست پیوندی دوگانه می تواند کند تر از پیمایش یک لیست پیوندی منفرد باشد

# درج

```
add(value)
    node = { value: value, next: null, previous: tail }
    if(tail)
        tail.next = node
    end if

    tail = node
    length++

    if(!head)
        head = tail
    end if

    return node
end add
```

# پیمایش

```
traversal(callback = (value,next,previous,index) => {})
    current = head
    counter = 0

    while (current)
        callback(current.value,current.next,current.previous,counter)

        counter++
        current = current.next
    end while
end traversal
```

# پیمایش معکوس

```
reverse(callback = (value,next,previous,index) => {})
    current = tail
    counter = 0

    while (current)
        callback(current.value,current.next,current.previous,counter)

        counter++
        current = current.previous
    end while
end reverse
```

# حذف از آخر (pop)

```
pop()
    tail = tail.previous || null
    if (tail.next) tail.next = null
    if (length === 1) head = null
    length--

    return true
end pop
```

# حذف

```
remove(value)
    current = head

    while (current)
        if(current.value === value)
            if(current.previous)
                current.previous.next = current.next
            end if
            if(current.next)
                current.next.previous = current.previous
            end if
            if(!current.next && !current.previous)
                head = null
                tail = null
            end if

            length--
            return true
        end if
        current = current.next
    end while

    return false
end remove
```

# جستجو

```
search(value)
    current = head

    while (current)
        if(current.value === value)
            return current
        end if

        current = current.next
    end while

    return false
end search
```

# جستجو براساس ایندکس

```
searchByIndex(index)
    current = head
    counter = 0

    while (current)
        if(index === counter)
            return current
        end if

        counter++
        current = current.next
    end while

    return false
end searchByIndex
```

## پیچیدگی ها

| Add  | Delete | Search | Reverse | IndexOf | SearchByIndex | Traversal | Pop  |
| :--: | :----: | :----: | :-----: | :-----: | :-----------: | :-------: | ---- |
| O(1) |  O(n)  |  O(n)  |  O(n)   |  O(n)   |     O(n)      |   O(n)    | O(1) |

# لیست های پیوندی

1- [Singly linked list](https://github.com/mmdzov/data-structure/blob/main/src/2.Linked-List/2_1.Singly-Linked-List/FA-README.md)

2- [Cicular linked list](https://github.com/mmdzov/data-structure/blob/main/src/2.Linked-List/2_2.Circular-Linked-List/FA-README.md)

4- [Circular Doubly linked list](https://github.com/mmdzov/data-structure/blob/main/src/2.Linked-List/2_4.Circular-Doubly-Linked-List/FA-README.md)
