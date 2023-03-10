# لیست پیوندی دایره ای

لیست پیوندی دایره ای نوعی لیست پیوندی است که در آن اولین و آخرین گره به همدیگر متصل هستند.

لیست های پیوندی دایره ای می توانند بصورت منفرد یا دوتایی باشند که در این بخش لیست پیوندی دایره ای منفرد پوشش داده میشود

در موقعیت های گوناگونی از لیست پیوندی دایره ای استفاده میشود بعنوان مثال در ساختارهای داده Stacks , Queues , Fibonacci heap کاربرد دارد همچنین برای درج و حذف از جلو و عقب در صف ها قابل استفاده است.

## مزایا

مزایای لیست پیوندی دایره ای شامل استفاده کارآمد از حافظه، امکان پیمایش از هر گره به گره دیگر و امکان عملیاتی مانند زمان بندی Round robin است.

## معایب

معایب لیست پیوندی دایره ای شامل پیچیدگی در مقایسه با لیست پیوندی منفرد، مشکل در پیمایش معکوس، و دشواری انجام عملیات push و pop برروی داده ها همچنین دسترسی تصادفی برروی لیست های پیوندی دایره ای امکان پذیر نمی باشد.

# درج

```
add(value)
    node = {value:value,next: head}
    current = head

    if (!head) head = node
    else
        while (current.next)
            current = current.next
            if (current.next === head) break;
        end while
        current.next = node
    return node
end add
```

# جستجو

```
search(value)
    current = head
    while (current)
        if (current.value === value)
            return current
        end if
        if (current.next === head)
            return false
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
        if(counter === index)
            return current
        end if
        if(current.next === head)
            return false
        end if

        counter++
        current = current.next
    end while
    return false
end searchByIndex
```

# حذف

```
remove(value)
    current = head
    previous = null

    if(current.value === value)
        while (current)
            if(current.next === head)
                break
            end if
            current = current.next
        end while

        next = head.next
        current.next = next
        head = next

        return true
    end if

    while (current)
        if(current.value === value)
            previous.next = current.next
            return true
        end if
        if(current.next === head)
            return false
        end if

        previous = current
        current = current.next
    end while

    return false
end remove
```

# پیمایش

```
traversal(callback = (value,next,index) => {})
    current = head
    counter = 0

    while(current)
        callback(current.value, current.next, counter)
        if(current.next === head)
            break;
        end if

        counter++
        current = current.next
    end while
end traversal

```

## پیچیدگی ها

| Add  | Delete | Search | InsertAt | IndexOf | SearchByIndex | Traversal |
| :--: | :----: | :----: | :------: | :-----: | :-----------: | :-------: |
| O(n) |  O(n)  |  O(n)  |   O(n)   |  O(n)   |     O(n)      |   O(n)    |

# لیست های پیوندی

1- [Singly linked list](https://github.com/mmdzov/data-structure/blob/main/src/2.Linked-List/2_1.Singly-Linked-List/FA-README.md)

3- [Doubly Linked list](https://github.com/mmdzov/data-structure/blob/main/src/2.Linked-List/2_3.Doubly-Linked-List/FA-README.md)

4- [Circular Doubly linked list](https://github.com/mmdzov/data-structure/blob/main/src/2.Linked-List/2_4.Circular-Doubly-Linked-List/FA-README.md)
