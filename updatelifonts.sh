#!/bin/bash
############################
gitmsz1="mck82.vercel.app zikis8.vercel.app fb.com/ztrabc"
############################
vrclpath="/home/viml/mg/vrcl/"
weijunext_path="/home/viml/mg/vrcl/weijunext/"
weijunext_componentspath="/home/viml/mg/vrcl/weijunext/components/"
declare -a vrcl_lifont_arr=(
"/home/viml/mg/vrcl/mck_/mck82/components/"
"/home/viml/mg/vrcl/mck_/mck81/components/"
"/home/viml/mg/vrcl/zikis8/components/"
"/home/viml/mg/vrcl/shenlu/components/" 
"/home/viml/mg/vrcl/vrclblog/src/app/_components/"
"/home/viml/mg/vrcl/word4/components/"
"/home/viml/mg/vrcl/nxbunquiz/src/app/Components/"
"/home/viml/mg/vrcl/chensonexsupabasesaasboiler/components/"
"/home/viml/mg/vrcl/fpnxcustbill/app/ui/"
"/home/viml/mg/vrcl/chatgpt_next_web/app/components/"
"/home/viml/mg/vrcl/leeorb_mdx_blogsite/app/"
"/home/viml/mg/vrcl/leeshadcn/components/"
)
############################
for i in "${vrcl_lifont_arr[@]}"
do
	rm -r ${i}/lifonts
	cp -r ${weijunext_componentspath}/lifonts ${i}/
done
############################
declare -a vrcl_git_arr=(
"/home/viml/mg/vrcl/weijunext/"
"/home/viml/mg/vrcl/mck_/mck82/"
"/home/viml/mg/vrcl/mck_/mck81/"
"/home/viml/mg/vrcl/zikis8/"
"/home/viml/mg/vrcl/shenlu/" 
"/home/viml/mg/vrcl/vrclblog/"
"/home/viml/mg/vrcl/word4/"
"/home/viml/mg/vrcl/nxbunquiz/"
"/home/viml/mg/vrcl/chensonexsupabasesaasboiler/"
"/home/viml/mg/vrcl/fpnxcustbill/"
"/home/viml/mg/vrcl/chatgpt_next_web/"
"/home/viml/mg/vrcl/leeorb_mdx_blogsite/"
"/home/viml/mg/vrcl/leeshadcn/"
)
############################
for i in "${vrcl_git_arr[@]}"
do
	cd ${i}
	############################
	printf "current directory is : $(pwd)\n"
	#read -n1 -s -r -p $'Press g to git add commit push ${i}... or Ctrl+C to exit...\n' key
	############################
	#if [ "$key" = 'g' ]; then
		#printf "pressed g so doiNg filling git add commit push ${i}\n"
		printf "doiNg git add commit push ${i}\n"
		git add . ; git commit -am "mck82.vercel.app zikis8.vercel.app fb.com/ztrabc" ; git push
	#else
		#printf "pressed other key.  so not doiNg git-commiting. please do git add-commit-push ${i} lateron \n"
	#fi
done
############################
cd ${weijunext_path}
############################
