import axios from 'axios';

const getLatestRepos = async (data,token)=>{
    try{
        const username = data.githubUsername;
        if(token){
            const res = await axios.get(
                `https://api.github.com/search/repositories?q=user:${username}+sort:updated-desc`,
                {
                    headers:{
                        Authorization:`token ${token}`
                    }
                }
            );
            var repos = res.data.items;
            var latestSix = repos.splice(0,6);
            return latestSix;
        }
        else{
            const res = await axios.get(
                `https://api.github.com/search/repositories?q=user:${username}+sort:updated-desc`
            );
            let repos = res.data.items;
            repos.forEach((repo)=>console.log(repo.created_at));
            let latestSix = repos.splice(0,6);
            // console.log(latestSix[5].created_at);
            return latestSix;
        }
    }catch(err){
        console.log(err);
    }
}
export default getLatestRepos;