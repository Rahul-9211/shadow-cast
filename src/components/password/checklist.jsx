/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module PasswordCheckList
 *@developer Sudhanshu
 */


import {
    UPPERCASE_REGEX,
    NUMBER_REGEX,
    LENGTH_REGEX,
    SPECIAL_CHARS_REGEX
} from "utils/index";

const rules = [
    { label: "At least 1 Uppercase.", pattern: UPPERCASE_REGEX },
    { label: "At least 1 Number.", pattern: NUMBER_REGEX },
    { label: "Minimum 8 Characters.", pattern: LENGTH_REGEX },
    { label: "At least 1 Special Character.", pattern: SPECIAL_CHARS_REGEX }
];


const CheckList = (props) => {
    return (
        <div className="mt-4 checklist pb-4">
            <p className="text-sm font-semibold text-white mb-4">Your password must contain:</p>
            {rules.map((rule) => {
                const cn =
                    props.value && props.value.match(rule.pattern) ? "passed" : props.value.length > 0 ? "!text-error": "";
                return <p className={`${cn} text-sm font-semibold mb-2 items`}>{rule.label}</p>;
            })}
        </div>
    );
};

export default CheckList;