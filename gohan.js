<script type="application/json">
{
  "vars": {
  "amp_pageName": ${canonicalPath},
  "amp_cd1": "g-interview",
  "amp_cd2": "g-interview"
  }
}
</script>

$(()=> {
   let dir = location.href.split("/");  
   let dir2 = "g-interview/entry/";  
   let dir3 = dir[dir.length -2];  
   let dir4 = dir[dir.length -1];  
　let mgurl = dir2 + dir3 + "/" + dir4;
　alert(mgurl);
});  
