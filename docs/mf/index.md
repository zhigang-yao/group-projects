# Overview
<div class="justify-text">
There has been an emerging trend in non-Euclidean statistical analysis of aiming to recover a low dimensional structure, namely a manifold, underlying the high dimensional data. Recovering the manifold requires the noise to be of certain concentration. Existing methods address this problem by constructing an approximated manifold based on the tangent space estimation at each sample point. Although theoretical convergence for these methods is guaranteed, either the samples are noiseless or the noise is bounded. However, if the noise is unbounded, which is a common scenario, the tangent space estimation at the noisy samples will be blurred. Fitting a manifold from the blurred tangent space might increase the inaccuracy. In this project, we introduce a series of new manifold-fitting methods, by which the output manifold is constructed by directly estimating the tangent spaces at the projected points on the underlying manifold, rather than at the sample points, to decrease the error caused by the noise.
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