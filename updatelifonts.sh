#!/bin/bash
############################
gitmsz1="'zawa8.vercel.app mck82.vercel.app fb.com/ztrabc x.com/etphor'"
############################
wrclpath="/home/viml/mg/wrcl/"
weijunext_path="/home/viml/mg/wrcl/weijunext/"
weijunext_componentspath="/home/viml/mg/wrcl/weijunext/components/"
declare -a wrcl_lifont_arr=(
"/home/viml/mg/wrcl/mck_/mck82/components/"
"/home/viml/mg/wrcl/mck_/mck81/components/"
"/home/viml/mg/wrcl/zikis8/components/"
"/home/viml/mg/wrcl/shenlu/components/" 
"/home/viml/mg/wrcl/wrclblog/src/app/_components/"
"/home/viml/mg/wrcl/word4/components/"
"/home/viml/mg/wrcl/nxbunquiz/src/app/Components/"
"/home/viml/mg/wrcl/chensonexsupabasesaasboiler/components/"
"/home/viml/mg/wrcl/fpnxcustbill/app/ui/"
"/home/viml/mg/wrcl/chatgpt_next_web/app/components/"
"/home/viml/mg/wrcl/leeorb_mdx_blogsite/app/"
"/home/viml/mg/wrcl/leeshadcn/components/"
)
############################
for i in "${wrcl_lifont_arr[@]}"
do
	rm -r ${i}/lifonts
	cp -r ${weijunext_componentspath}/lifonts ${i}/
done
############################
declare -a wrcl_git_arr=(
"/home/viml/mg/wrcl/weijunext/"
"/home/viml/mg/wrcl/mck_/mck82/"
"/home/viml/mg/wrcl/mck_/mck81/"
"/home/viml/mg/wrcl/zikis8/"
"/home/viml/mg/wrcl/shenlu/" 
"/home/viml/mg/wrcl/wrclblog/"
"/home/viml/mg/wrcl/word4/"
"/home/viml/mg/wrcl/nxbunquiz/"
"/home/viml/mg/wrcl/chensonexsupabasesaasboiler/"
"/home/viml/mg/wrcl/fpnxcustbill/"
"/home/viml/mg/wrcl/chatgpt_next_web/"
"/home/viml/mg/wrcl/leeorb_mdx_blogsite/"
#"/home/viml/mg/wrcl/leeshadcn/"
)
############################

############################
read -n1 -s -r -p $'Press g to git add commit push ${i}... or Ctrl+C to exit...\n' key
if [ "$key" = 'g' ]; then
	printf "pressed g so doiNg filling git add commit push ${i}\n"
	for i in "${wrcl_git_arr[@]}"
	do
		cd ${i}
		printf "current directory is : $(pwd)\n"
		printf "doiNg git add commit push ${i}\n"
		git add . ; git commit -am 'zawa8.vercel.app mck82.vercel.app fb.com/ztrabc x.com/etphor' ; git push
	done
else
	printf "pressed other key.  so no git-commit. please do git add-commit-push lateron \n"
fi
############################
cd ${weijunext_path}
############################
