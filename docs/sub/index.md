# Overview

<div class="justify-text">
This project introduces a novel approach to uncovering principal components within multivariate datasets residing on embedded nonlinear Riemannian manifolds within higher-dimensional spaces. Our goal is to enhance the geometric interpretation of Principal Component Analysis (PCA) while retaining the capacity to capture non-geodesic modes of variation in the data.
<br><br>
We introduce the concept of a "principal sub-manifold," which is essentially a manifold passing through a reference point. At any given point along this sub-manifold, it extends in the direction characterized by the highest variation within the space spanned by the eigenvectors derived from local tangent space PCA. This concept builds upon previous work on principal flows, specifically in cases where the sub-manifold has a dimension greater than one. In essence, the principal sub-manifold offers a versatile extension of the principal flow, capable of capturing higher-dimensional variations within the data.
<br><br>
We demonstrate that the principal sub-manifold encompasses the space spanned by the traditional principal components in Euclidean space. Through illustrative examples, we elucidate how to discover, utilize, and interpret a principal sub-manifold. Additionally, we showcase an application in shape analysis to underscore its practical relevance and utility.
</div>

An implementation in Matlab is available on Github: :material-arrow-right: <a href="https://github.com/zhigang-yao/submanifold" class="btn-href">:simple-github:</a>  
Detailed description and discussion can be found in paper: :material-arrow-right: <a href="https://arxiv.org/abs/1604.04318" class="btn-href">:material-newspaper-variant-outline:</a>  
To cite: :material-arrow-down:

```
@article{yao2016principal,
  title={Principal sub-manifolds},
  author={Yao, Zhigang and Eltzner, Benjamin and Pham, Tung},
  journal={arXiv preprint arXiv:1604.04318},
  year={2016}
}
```
```
@article{yao2023hunting,
  title={Hunting Principal Submanifolds: New Theories and Methods},
  author={Yao, Zhigang and Li, Bingjie and Tran, Van Do and Zhang, Zhenyue},
  journal={Technical Report},
  year={2023}
}
```