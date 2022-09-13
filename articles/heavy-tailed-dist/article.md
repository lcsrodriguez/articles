# Overview of heavy-tailed distribution


## Introduction


## Identification of heavy-tailed distribution

There exists many ways to identify the type of tailed thickness of a given probability distribution.

One of the most classical techniques is to use the exponential function as a benchmark measure with respect to the considered distribution.


<p class="definition">
</p>
    
    
Let $X$ be a non-negative random with a cumulative distribution function (cdf) $F(x) = \mathbb{P}(X \leq x)$. We denote $\overline{F}$ its **survival distribution function** (sdf) defined as follows:

$$
\forall x > 0, \ \overline{F}(x) = 1 - F(x) = \mathbb{P}(X > x)
$$




The generic exponential function ($\cdot \longmapsto \exp \cdot$) is commonly used as a benchmark for tails width.


Many criteria can be used with this method, in order to distinguish either heavy or light-tailed distributions.


$F$ is ***light-tailed*** if:

$$
\lim_{x \rightarrow + \infty} \frac{\overline{F}(x)}{\exp(-\alpha x)} < + \infty, \ \text{for some $\alpha > 0$}
$$

$F$ is ***heavy-tailed*** if:

$$
\lim_{x \rightarrow + \infty} \frac{\overline{F}(x)}{\exp(-\alpha x)} = + \infty, \ \forall \alpha > 0
$$




## Summary

## References

- *Non-Life Insurance Mathematics - An Introduction with the Poisson* (2nd Edition), Thomas MIKOSCH, Springer