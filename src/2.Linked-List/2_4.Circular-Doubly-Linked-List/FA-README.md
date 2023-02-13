# لیست دایره ای پیوندی دوگانه

این ساختار داده ترکیبی از لیست پیوندی دایره ای و لیست پیوندی دوگانه می باشد و امکان پیمایش در هر دو جهت را فراهم می کند

ساختار داده CDLL معمولا جهت پیاده سازی ساختارهای داده پیشرفته مانند Fibonacci Heaps استفاده می شود و همچنین می توانند برای پیاده سازی circular queues استفاده شوند

# مزایا

- توانایی معکوس کردن آسان لیست
- تخصیص یا تخصیص مجدد حافظه در حین اجرا
- حذف گره ها راحت تر از لیست های پیوندی منفرد
- سربار کم درمقایسه با سایر ساختارهای داده مانند آرایه ها
- برای الگوریتم هایی مانند Round Robin مناسب است و می تواند نیاز به پیمایش کامل برای انجام عملیات خاص را برطرف کند
- می توانند برای ساخت حافظه پنهان MRU/LRU استفاده شوند

# معایب

- به دلیل وجود اشاره گر previous از حافظه بیشتری نسبت به لیست پیوندی منفرد استفاده می کند
- همچنین شامل معایب لیست پیوندی دوگانه میشود

# درج

```
add(value)
    node = {value:value,next:head,previous:tail}
    if(tail) tail.next = node
    tail = node

    length++

    if(!head) head = tail
    else head.previous = node
    return node
end add
```

# جستجو
```
search(value)
    current = head

    while(current)
        if(current.value === value) 
            return current
        end if
        if(current.next === head) 
            break
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

    while(current) 
        if(counter === index) 
            return current
        end if
        if(current.next === head) 
            break;
        end if

        counter++
        current = current.next
    end while
    
    return false
end searchByIndex
```

# پیمایش
```
traversal(callback = (value,next,previous,index) => {})
    current = head
    counter = 0

    while(current) 
        callback(current.value,current.next,current.previous,counter)

        if(current.next === head)
            break
        end if

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

    while(current)
        callback(current.value,current.next,current.previous,counter)
        
        if(current.previous === head) 
            break;
        end if

        counter++
        current = current.previous
    end while
end reverse

```

# حذف
```
remove(value)
    current = head
    previous = null

    if(head.value === value || tail.value === value)
        if(tail.value === value) 
            tail = tail.previous
        end if
        if(head.value === value)
            head = head.next
        end if

        head.previous = tail
        tail.next = head

        length--
        return true
    end if

    while(current)
        if(current.value === value)
            previous.next = current.next
            current.previous.next = current.next
            previous.next.previous = current.previous
            length--
            return true
        end if
        if(current.next === head)
            break
        end if

        previous = current
        current = current.next
    end while

    return false
end remove
```

# حذف از آخر (pop)
```
pop()
    tail = tail.prev || null
    if(tail.next) 
        tail.next = head
    end if
    if(head.prev)
        head.prev = tail
    end if

    if(length === 1)
        head = null
        tail = null
    end if

    length--
    
    return true
end pop
```


## پیچیدگی ها

| Add  | Delete | Search | Reverse | IndexOf | SearchByIndex | Traversal | Pop  |
| :--: | :----: | :----: | :-----: | :-----: | :-----------: | :-------: | ---- |
| O(1) |  O(n)  |  O(n)  |  O(n)   |  O(n)   |     O(n)      |   O(n)    | O(1) |


# لیست های پیوندی

1- [Singly linked list](https://github.com/mmdzov/data-structure/blob/main/src/2.Linked-List/2_1.Singly-Linked-List/FA-README.md)

2- [Cicular linked list](https://github.com/mmdzov/data-structure/blob/main/src/2.Linked-List/2_2.Circular-Linked-List/FA-README.md)

3- [Doubly Linked list](https://github.com/mmdzov/data-structure/blob/main/src/2.Linked-List/2_3.Doubly-Linked-List/FA-README.md)
