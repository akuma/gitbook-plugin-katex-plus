# Math typesetting using KaTex

[![Greenkeeper badge](https://badges.greenkeeper.io/akuma/gitbook-plugin-katex-plus.svg)](https://greenkeeper.io/)

Use it for your book, by adding to your book.json:

```
{
    "plugins": ["katex-plus"]
}
```

then run `gitbook install`.

## Usage

```
Inline math: $\int_{-\infty}^\infty g(x) dx$

Block math:

$$
\int_{-\infty}^\infty g(x) dx
$$

Or using the templating syntax:

Inline math: {% math_inline %}\int_{-\infty}^\infty g(x) dx{% endblock %}

Block math:

{% math %}\int_{-\infty}^\infty g(x) dx{% endblock %}
```

## Comparison with [gitbook-plugin-katex](https://github.com/GitbookIO/plugin-katex)

- Use single `$` for inline math.
