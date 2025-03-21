# RNA clustering and clash correction via Principal Submanifold
## Overview
<div class="justify-text">
Accurate determination of RNA structures is essential for understanding their biological functions; however, the reconstruction process often suffers from issues like atomic clashes, leading to unreliable models. To address this, we propose a novel Principal Submanifold (PSM) approach tailored for RNA data analysis on a torus. This method efficiently captures accurate low-dimensional representations, overcoming limitations of previous torus-based methods, and enhances clustering precision and robustness by integrating PSM with DBSCAN into a new algorithm, PSM-DBSCAN. Furthermore, we extend this clustering method to develop PSM-DBSCAN-MC, a multiscale RNA clash-correction technique at both microscopic and mesoscopic scales. 
<br><br>
Simulation experiments demonstrate that our approach successfully captures intrinsic data structures, delivering superior performance in clustering data on the torus, compared with existing methods. Additionally, evaluations on real RNA clashes data confirm the method's effectiveness and practicality. By addressing the challenges posed by high-dimensional RNA data on the torus, the PSM-based framework not only can correct RNA clashes but also provides a versatile tool adaptable to various biological structures. This advancement lays the groundwork for deeper biological insights and broader applications in biomedical research.
</div>

An implementation in MATLAB is available on Github: :material-arrow-right: <a href="https://github.com/zhigang-yao/RNA-Clash-Correction/" class="btn-href">:simple-github:</a>  
Detailed description and discussion can be found in paper: :material-arrow-right: <a href="" class="btn-href">:material-newspaper-variant-outline:</a>  
To cite: :material-arrow-down:
```
@article{yao2025principal,
  title={A Principal Submanifold-Based Approach for Clustering and Multiscale RNA Correction},
  author={Wu, Menghao and Yao, Zhigang},
  journal={Technical Report},
  year={2025}
}
```