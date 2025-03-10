#!/bin/bash
############################
vrclpath="/home/viml/mg/vrcl/"
weijunext_componentspath="/home/viml/mg/vrcl/weijunext/components/"
declare -a vrcl_arr=(
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
for i in "${vrcl_arr[@]}"
do
	rm -r ${i}/lifonts
	cp -r ${weijunext_componentspath}/lifonts ${i}/
done
############################
