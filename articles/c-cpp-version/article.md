# Determine the C/C++ current version

This short post gives you direct and ready-to-use snippets to determine the current C/C++ version with which the script was compiled.

## C

In C, the macro variable `__STDC_VERSION__` contains the C version. We can write to following file
```c
#include <stdio.h>

int main() {
        printf("%ld", __STDC_VERSION__);
        return 0;
}
```

```shell
$       gcc c_ver.c -o c_ver
$       ./c_ver
```

We get the following output after execution:
```shell
$   201710
```

**Remark**: The command flag `-std=c18` might be used before compilation to force a C version to be used.

## C++

As for C++, the macro variable `__cplusplus` is used to determine the version of C++ during compilation stage.

The following file returns this macro's value on standard output.

```cpp
#include <iostream>

int main() {
        printf("%ld", __cplusplus);
        return 0;
}
```

```shell
$       g++ cpp_ver.cpp -o cpp_ver
$       ./cpp_ver
```


## Conclusion


## References

1. https://gcc.gnu.org/onlinedocs/gcc/C-Dialect-Options.html
2. https://gcc.gnu.org/onlinedocs/gcc-9.5.0/cpp/Standard-Predefined-Macros.html
