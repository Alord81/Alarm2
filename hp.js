// setTimeout(function () {
//     let p = document.createElement('p');
//     let text = document.createTextNode('struct group_info init_groups = { .usage = ATOMIC_INIT(2)};');
//     p.appendChild(text)
//     document.body.append(p)
// }, 1000)
// setTimeout(function () {
//     let p = document.createElement('p');
//     let text = document.createTextNode('struct group_info *groups_alloc(int gidsetsize){');
//     p.appendChild(text)
//     document.body.append(p)
// }, 1500);

let sentens = [
    'struct group_info init_groups = { .usage = ATOMIC_INIT(2) };',
    'struct group_info *groups_alloc(int gidsetsize){',
    '   struct group_info *group_info;',
    '   int nblocks;',
    '   int i;',
    '',
    '',
    '',
    '',
    'nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;',
    'nblocks = nblocks ? : 1;',
    'nblocks = nblocks ? : 1;',
    'if (!group_info)',
    '   return NULL;',
    'group_info->ngroups = gidsetsize;',
    'group_info->nblocks = nblocks;',
    'atomic_set(&group_info->usage, 1);',
    '',
    '',
    '',
    '',
    'if (gidsetsize <= NGROUPS_SMALL)',
    'group_info->blocks[0] = group_info->small_block;',
    'else {',
    '',
    '',
    '   for (i = 0; i < nblocks; i++) {',
    '       gid_t *b;',
    '       b = (void *)__get_free_page(GFP_USER);',
    '       if (!b)',
    '           goto out_undo_partial_alloc;',
    '       group_info->blocks[i] = b;',
    '   }',
    '}',
    'return group_info;',
    '   for (i = 0; i < nblocks; i++) {',
    '       gid_t *b;',
    '       b = (void *)__get_free_page(GFP_USER);',
    '       if (!b)',
    '           goto out_undo_partial_alloc;',
    '       group_info->blocks[i] = b;',
    '   }',
    '}',
    'return group_info;',



];

console.log(sentens.length)

for (let i = 0; i < sentens.length; i++) {
    let num = 10;
    setTimeout(function () {
        let p = document.createElement('p');
        let text = document.createTextNode(sentens[i]);
        p.appendChild(text)
        document.body.append(p)
    }, (num * 5 * i + 1));

    console.log(`${i}: ${num * 5 * i + 1}`)
    console.log('done')
}

setTimeout(function () {
    window.close()
}, 2151)