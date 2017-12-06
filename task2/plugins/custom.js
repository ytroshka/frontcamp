module.exports = function ({types: t}) {
    return {
        visitor: {
            Expression(path) {
                const callee = path.node.callee;
                if (callee && callee.property && callee.object && callee.object.name === "console") {
                    if (path.parentPath.isExpressionStatement()) {
                        path.remove();
                    } else {
                        path.replaceWith(t.unaryExpression("void", t.numericLiteral(0)));
                    }
                }
            }
        }
    };
};