# Overview of heavy-tailed distribution


## Introduction


## Identification with exponential benchmark

There exists many ways to identify the type of tailed thickness of a given probability distribution.

One of the most classical techniques is to use the exponential function as a benchmark measure with respect to the considered distribution.


<p class="definition">
test
</p>
    
    
Let $X$ be a non-negative random with a cumulative distribution function (cdf) $F(x) = \mathbb{P}(X \leq x)$. We denote $\overline{F}$ its **survival distribution function** (sdf) defined as follows:

$$
\forall x > 0, \ \overline{F}(x) = 1 - F(x) = \mathbb{P}(X > x)
$$




The generic exponential function ($\cdot \longmapsto \exp \cdot$) is commonly used as a benchmark for tails width.


Many criteria can be used with this method, in order to distinguish either heavy or light-tailed distributions.


$F$ is ***light-tailed*** if:

$$
\lim_{x \rightarrow + \infty} \frac{\overline{F}(x)}{e^{-\alpha x}} < + \infty, \ \text{for some $\alpha > 0$}
$$


$F$ is ***heavy-tailed*** if:

$$
\forall \alpha > 0, \ \lim_{x \rightarrow + \infty} \frac{\overline{F}(x)}{e^{-\alpha x}} = + \infty
$$

Remark: For simplicity sake within further mathematical proofs, the *for some* statement can be easily replaced by:

$$
\exists \alpha_0 > 0, \ \lim_{x \rightarrow + \infty} \frac{\overline{F}(x)}{e^{-\alpha_0 x}} < + \infty
$$

So that, we only have to recover only one $\alpha_0$ strictly positive, which satisfies this property.

**Proposition**: Let $X$ be a non negative $\mathbb{R}$-valued random variable with $M_X$, its moment generating function (mgf) defined in $u > 0$







## Identification with mean-excess function $e_f$


## Summary


$$M_X(u) := \mathbb{E}[e^{uX}], \ \forall u \in \mathbb{R}$$


If $X \sim F$, then:

$$
M_X(u) := \int_{\mathbb{R}} e^{ux} \mathrm{d}F(x) = \int_{\mathbb{R}} e^{ux} f(x)\mathrm{d}x
$$

## References

- *Non-Life Insurance Mathematics - An Introduction with the Poisson* (2nd Edition), Thomas MIKOSCH, Springer