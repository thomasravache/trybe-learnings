### Exercício 3

```bash
docker pull debian:stable-slim
```

### Exercício 4

```bash
docker container run -it debian:stable-slim
```

### Exercício 5

```bash
cat /etc/*-release

```

Output:
```
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
```

### Exercício 6

```bash
exit
```

### Exercício 7

```bash
docker container ls -a
```

### Exercício 8

```bash
docker container start <container_id>
docker container ls
```

### Exercício 9

```bash
docker container attach <container_id>
```

### Exercício 10

Output:
```bash
11.1
```

### Exercício 11

```bash
exit
```

### Exercício 12

```bash
docker container rm <container_id>
```

### Exercício 13

```bash
docker container run -it --rm andrius/ascii-patrol
```