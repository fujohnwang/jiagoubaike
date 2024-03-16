# Intro

A simple doc site template project with astro build

> Tips
>
> run `mda` or `amdc` snippets to create a new post with Dash.app.

# Gotchas

pagination要注意，第一个是文件名需要是`[page].astro`的形式，然后如下代码才会正常初始化一个名为`page`的property：

```js
export async function getStaticPaths({ paginate }) {
	const blogs = await Astro.glob('./*.md');
	return paginate(blogs, { pageSize: 11 });
	// return paginate(blogs.sort((a, b) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date)).reverse(), { pageSize: 11 });
}
const { page } = Astro.props;
```

`[page].astro`最终变为1，2，3等路径，所以，如果把`[page].astro`放在posts目录下，那么访问各个分页的路径就是：`posts/1`,`posts/2`,`posts/3`...












