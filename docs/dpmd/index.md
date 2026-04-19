# Differentially Private Manifold Denoising
## Overview

<div class="justify-text">
We introduce a differentially private manifold denoising framework that uses sensitive reference data to correct noisy, non-private query points while preserving privacy. The method proceeds iteratively: it privately estimates local means and tangent geometry from the reference data, updates query points along the privately estimated subspace toward the local mean, and tracks privacy loss across iterations and queries under \((\varepsilon,\delta)\)-differential privacy.
<br><br>
Conceptually, this framework brings differential privacy to manifold methods, retaining enough geometric signal for downstream tasks such as embedding, clustering, and visualization while providing formal DP guarantees for the reference dataset. Practically, the procedure is modular and scalable, with a budget scheduler that allocates privacy across iterations and query updates.
<br><br>
Under standard assumptions on manifold regularity, sampling density, and measurement noise, we establish high-probability utility guarantees showing that corrected queries converge toward the manifold at a non-asymptotic rate governed by sample size, noise level, bandwidth, and privacy budget. Simulations and case studies demonstrate accurate signal recovery under moderate privacy budgets and highlight the tradeoff between utility and privacy.
</div>

Detailed description and discussion can be found in paper: :material-arrow-right: <a href="https://arxiv.org/abs/2604.00942" class="btn-href">:material-newspaper-variant-outline:</a>  
To cite: :material-arrow-down:

```
@article{wu2026differentially,
  title={Differentially Private Manifold Denoising},
  author={Wu, Jiaqi and Sun, Yiqing and Yao, Zhigang},
  journal={arXiv preprint arXiv:2604.00942},
  year={2026}
}
```
