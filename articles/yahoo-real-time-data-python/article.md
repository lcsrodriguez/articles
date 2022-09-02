# Yahoo Real-time data collector - Python



Financial markets are one of the fastest and most critical systems on Earth. 
It involves millions of physical or institutional actors around the globe, who take decision
on a wide time-interval: from a minute to a fraction of nanoseconds for some of them ($10^{-9}$ sec) (HFT).

To make these decisions as accurate as wanted by their business needs, the financial actors and moneymakers have
to rely on accurate and frequently-updated data in order to get **a discrete but precise approximation** of the financial reality.

At time $t \in \mathbb{R}^+$, the actors have access to a set of publicly-released information $\mathcal{F}_t$ representing
the information available at time $t$. 
We also denote the $\mathcal{G}_t$ which represents the information newly available from $t - 1$ to $t$ 
(not before, not after): the set $\mathcal{G}_t$ has **no memory** and does not contain any information from the past.

So, we have:


$$
\mathcal{F}_{t} := \mathcal{G}_{t} \cup \mathcal{F}_{t}
$$


$$
f(x) = \sum_{i = 1}^n \phi_i(x) + \int\int\int h(t)\mathrm{d}t
$$

The goal of most of the financial actors is to have access to the widest set $\mathcal{G}_{t}$ at any given time.


While the intervals $[\![ t - 1, t ]\!]$ between two significant markets moves (or updates), is becoming smaller and smaller,
thanks to the new *Electronic Era*, the financial actors have to follow the trends and gather as many data as available 
and process it **before** performing a *cold-storage*. In the meantime, they have to adapt the data process pipeline, to
another category of operations: real-time data manipulation.

We call a *cold-storage*, a set of disks on which the user performs multiple data-saving operations for further but less frequent uses
(statistics, aggregations, query, ...).

In technology, while the interval between two data points is drastically reducing over the past few decades, 
it is no longer possible to gather and collect new data points, store them on high-volume storage devices and **then**
perform data analytics on it, due to the small $\mathrm{d}t$.

In financial engineering applications, real-time data are crucial for a good understanding of a 
large variety of the past market moves. It helps to improve business performance by pointing out 
the flaws of current decision-making process and upgrade them using statistical
techniques (including supervised/unsupervised learning).

## Introduction

I


## Goals


## Overview of the available solutions

- IEX Cloud
- Google Finance
- Yahoo Finance
- Bloomberg
- NYSE/Euronext

## Implementation

### WebSockets features

### ProtoBuffer


## Summary


## References

- https://www.techopedia.com/definition/31256/real-time-data
- https://www.zeni.ai/blog/real-time-financial-data
- https://internationalbanker.com/technology/why-real-time-data-matters-in-financial-services/