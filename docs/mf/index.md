# Overview
<div class="justify-text">
In recent years, there has been a growing interest in non-Euclidean statistical analysis, particularly in the pursuit of recovering a low-dimensional structure, referred to as a manifold, that underlies high-dimensional data. The successful recovery of this manifold is contingent on certain noise concentration conditions. Previous methods tackle this challenge by approximating the manifold based on tangent space estimations at each data sample. While these methods offer theoretical convergence guarantees, they assume either noise-free data or noise with bounded characteristics. In practical scenarios where unbounded noise is common, the tangent space estimations at noisy samples become inherently imprecise, potentially introducing inaccuracies when fitting the manifold.
<br><br>
In response to this challenge, our research project introduces a novel approach. Instead of estimating tangent spaces at the original data samples, we directly estimate these spaces at projected points on the underlying manifold. This strategic shift aims to mitigate errors caused by unbounded noise, resulting in more accurate manifold fitting.
<br><br>
Our research, encompassing our 2019 paper (yx) and subsequent work in 2023 (ysl), centers on non-Euclidean statistical analysis, specifically the recovery of low-dimensional manifolds from high-dimensional data. Unlike existing methods relying on tangent space estimations at data samples, we directly estimate these spaces at manifold-projected points, enhancing accuracy and addressing unbounded noise. Our initial paper (yx) introduced a practical algorithm for manifold fitting, and our 2023 work (ysl) refines the algorithm and establishes superior error bounds. These contributions significantly advance non-Euclidean statistical analysis.
</div>

Implementations of manifold algorithms in Matlab and Python are available on Github: :material-arrow-right: <a href="https://github.com/zhigang-yao/manifold-fitting" class="btn-href">:simple-github:</a>  
Detailed description and discussion can be found in papers: :material-arrow-right: 
<a href="https://arxiv.org/abs/1909.10228" class="btn-href">yx</a>
<a href="https://arxiv.org/abs/2304.07680" class="btn-href">ysl</a>  
To cite: :material-arrow-down:

```
@article{yao2019manifold,
  title={Manifold fitting under unbounded noise},
  author={Yao, Zhigang and Xia, Yuqing},
  journal={arXiv preprint arXiv:1909.10228},
  year={2019}
}
```

```
@article{yao2023manifold,
  title={Manifold Fitting},
  author={Yao, Zhigang and Su, Jiaji and Li, Bingjie and Yau, Shing-Tung},
  journal={arXiv preprint arXiv:2304.07680},
  year={2023}
}
```