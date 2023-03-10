# لیست پیوندی منفرد

لیست پیوندی منفرد، یک نوع از لیست پیوندی می باشد که دارای یک جهت می باشد و درنتیجه می توان فقط از **head** تا **tail** آن را پیمایش کرد.

یک لیست پیوندی از گره **head** و **tail** تشکیل می شود.

**به بالاترین گره در لیست پیوندی head گفته میشود**

**به انتهایی ترین گره در لیست پیوندی tail گفته میشود**

همچنین یک گره از لیست پیوندی منفرد دارای value و next می باشد.

**value**: به مقدار گره اشاره می کند

**next**: به گره بعدی اشاره می کند

برای نمایش دادن انتهای یک لیست پیوندی از عبارت **null** بعنوان مقدار **next** در آخرین گره از لیست پیوندی استفاده میشود و به آن گره **tail** گفته می شود.

مثال زیر یک لیست پیوندی منفرد می باشد.

```javascript
const linkedlist = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: null,
    },
  },
};
```

گره اول با value 1 گره **head** نامیده می شود و گره آخر با value 2 گره **tail** نامیده می شود.

عملیات های قابل انجام برروی لیست های منفرد شامل درج ، حذف ، پیمایش و جستجوی مقادیر خاص می باشد.

# درج

```
add(value)
    node = { value: value,next: null }
    if(head === null)
        head = node
        tail = node
        length++
        return node
    end if

    tail.next = node
    tail = node
    length++

    return node
end add
```

# درج در موقعیت خاص

```
insertAt(value, index)
    current = head
    counter = 0
    previous = null

    while (current)
        if (counter === index)
            node = { value: value, next: current }
            if (!previous) head = node
            else previous.next = node
            length++
            return node
        end if

        previous = current
        current = current.next
        counter++
    end while

    return null
end insertAt
```

# حذف

```
remove(value)
    current = head
    previous = null

    while (current)
        if(current.value === value)
            if(prev === null) head = current.next
            else previous.next = current.next
            length--
            return current.value
        end if
        previous = current
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
        if (counter === index)
            return current
        end if
        counter++
        current = current.next
    end while

    return false
end searchByIndex
```

# پیمایش

```
traversal(callback = (value,next,index) => {})
    current = head
    counter = 0

    while(current)
        callback(current.value,current.next,counter)

        counter++
        current = current.next
    end while
end traversal
```

## پیچیدگی ها

| Add  | Delete | Search | InsertAt | IndexOf | SearchByIndex | Traversal |
| :--: | :----: | :----: | :------: | :-----: | :-----------: | :-------: |
| O(1) |  O(n)  |  O(n)  |   O(n)   |  O(n)   |     O(n)      |   O(n)    |

# لیست های پیوندی

2- [Cicular linked list](https://github.com/mmdzov/data-structure/blob/main/src/2.Linked-List/2_2.Circular-Linked-List/FA-README.md)

3- [Doubly Linked list](https://github.com/mmdzov/data-structure/blob/main/src/2.Linked-List/2_3.Doubly-Linked-List/FA-README.md)

4- [Circular Doubly linked list](https://github.com/mmdzov/data-structure/blob/main/src/2.Linked-List/2_4.Circular-Doubly-Linked-List/FA-README.md)
