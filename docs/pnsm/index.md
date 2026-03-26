# Principal Decomposition with Nested Submanifolds
## Overview

<div class="justify-text">
Over the past decades, the increasing dimensionality of data has increased the need for effective data decomposition methods. Existing approaches, however, often rely on linear models or lack sufficient interpretability or flexibility. To address this issue, we introduce a novel nonlinear decomposition technique called the principal nested submanifolds, which builds on the foundational concepts of principal component analysis. This method exploits the local geometric information of data sets by projecting samples onto a series of nested principal submanifolds with progressively decreasing dimensions. It effectively isolates complex information within the data in a backward stepwise manner by targeting variations associated with smaller eigenvalues in local covariance matrices. Unlike previous methods, the resulting subspaces are smooth manifolds, not merely linear spaces or special shape spaces. Validated through extensive simulation studies and applied to real-world RNA sequencing data, our approach surpasses existing models in delineating intricate nonlinear structures. It provides more flexible subspace constraints that improve the extraction of significant data components and facilitate noise reduction. This innovative approach not only advances the non-Euclidean statistical analysis of data with low-dimensional intrinsic structure within Euclidean spaces, but also offers new perspectives for dealing with high-dimensional noisy data sets in fields such as bioinformatics and machine learning.
</div>

<!-- An implementation in Matlab is available on Github: :material-arrow-right: <a href="https://github.com/zhigang-yao/scAMF" class="btn-href">:simple-github:</a>   -->
Detailed description and discussion can be found in paper: :material-arrow-right: <a href="https://arxiv.org/abs/2502.10010" class="btn-href">:material-newspaper-variant-outline:</a>  
To cite: :material-arrow-down:
```
@misc{su2026principal,
      title={Principal Decomposition with Nested Submanifolds}, 
      author={Jiaji Su and Zhigang Yao},
      year={2026},
      eprint={2502.10010},
      archivePrefix={arXiv},
      primaryClass={stat.ME},
      url={https://arxiv.org/abs/2502.10010}, 
}
```